export function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.22) 1px, transparent 1px)",
          backgroundSize: "24px 32px",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl bg-gradient-to-r from-teal-400 to-teal-600 animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-gradient-to-r from-teal-400/10 to-slate-950/10 blur-3xl" />
    </div>
  );
}
