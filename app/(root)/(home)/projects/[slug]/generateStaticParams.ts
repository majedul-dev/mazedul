// app/projects/[slug]/generateStaticParams.ts

import { client } from "@/lib/contentful";

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: 'projects', // Replace with your content type ID
  });

  return res.items.map((item: any) => ({
    slug: item.fields.slug,
  }));
}
