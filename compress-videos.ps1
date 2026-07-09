param(
    [string]$ProjectsDir = "c:\codebase\nok-website\public\projects",
    [string]$FFmpeg = "C:\Users\kechiregis\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.2-full_build\bin\ffmpeg.exe"
)

# Files larger than 20 MB
$threshold = 20MB

$videos = Get-ChildItem $ProjectsDir -Filter "*.mp4" |
    Where-Object { $_.Length -gt $threshold } |
    Sort-Object Length -Descending

if ($videos.Count -eq 0) {
    Write-Host "No heavy videos found." -ForegroundColor Green
    exit 0
}

Write-Host "`n=== Videos to compress ===" -ForegroundColor Cyan
$videos | ForEach-Object {
    Write-Host "  $($_.Name)  ->  $([math]::Round($_.Length/1MB,1)) MB" -ForegroundColor Yellow
}

$total = $videos.Count
$i = 0

foreach ($video in $videos) {
    $i++
    $input  = $video.FullName
    $temp   = "$($video.DirectoryName)\__compressed_$($video.Name)"

    Write-Host "`n[$i/$total] Compressing: $($video.Name) ($([math]::Round($video.Length/1MB,1)) MB)" -ForegroundColor Cyan

    # H.264, CRF 28, fast preset, scale down to max 1280px wide, stereo audio 128k
    $args = @(
        "-y",
        "-i", $input,
        "-c:v", "libx264",
        "-crf", "28",
        "-preset", "fast",
        "-vf", "scale='min(1280,iw)':-2",
        "-c:a", "aac",
        "-b:a", "128k",
        "-movflags", "+faststart",
        $temp
    )

    & $FFmpeg @args 2>&1

    if ($LASTEXITCODE -eq 0 -and (Test-Path $temp)) {
        $origMB = [math]::Round($video.Length / 1MB, 1)
        $newMB  = [math]::Round((Get-Item $temp).Length / 1MB, 1)
        $saving = [math]::Round((1 - ($newMB / $origMB)) * 100, 1)

        Remove-Item $input -Force
        Rename-Item $temp $video.Name

        Write-Host "  Done: $origMB MB  ->  $newMB MB  ($saving% smaller)" -ForegroundColor Green
    } else {
        Write-Host "  FAILED for $($video.Name) - keeping original" -ForegroundColor Red
        if (Test-Path $temp) { Remove-Item $temp -Force }
    }
}

Write-Host "`n=== Compression complete ===" -ForegroundColor Cyan
Get-ChildItem $ProjectsDir -Filter "*.mp4" |
    Select-Object Name, @{Name="SizeMB";Expression={[math]::Round($_.Length/1MB,2)}} |
    Sort-Object SizeMB -Descending |
    Format-Table -AutoSize
