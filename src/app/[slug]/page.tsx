import { getPage } from "@/lib/wordpress";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = await getPage(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8rem 2rem 6rem' }}>
      <article className="wp-content">
        <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </article>
    </div>
  );
}
