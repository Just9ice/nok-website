const API_URL = "https://nokinc.com/wp-json/wp/v2";

export async function getPage(slug: string) {
  const res = await fetch(`${API_URL}/pages?slug=${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch page");
  }

  const data = await res.json();

  return data[0];
}