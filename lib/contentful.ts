import { createClient, Entry } from 'contentful';

export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string
  });

  interface Fields {
    title: string
      projecturl: string
      githuburl: string
      stack: Array<string>
      image: string
      slug: string
      category: string
  }
  
  export async function fetchEntries(): Promise<Entry<Fields>[]> {
    const entries = await client.getEntries<Fields>({content_type: 'projects'});
    return entries.items;
  }
  
  export async function fetchEntry(id: string): Promise<Entry<Fields>> {
    const entry = await client.getEntry<Fields>(id);
    return entry;
  }