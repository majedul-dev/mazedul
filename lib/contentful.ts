import { createClient, Entry } from 'contentful';

const client = createClient({
    space: 'h9ymhx11d890',
    accessToken: 'oVK60VtjzOc6yGlmxgyOPenVvDGbNb3epGuppEZiz_8'
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
    const entries = await client.getEntries<Fields>();
    return entries.items;
  }
  
  export async function fetchEntry(id: string): Promise<Entry<Fields>> {
    const entry = await client.getEntry<Fields>(id);
    return entry;
  }