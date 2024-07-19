// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { client } from '@/lib/contentful';
import Image from 'next/image';

interface ProjectProps {
  params: { slug: string };
}

const getProjectBySlug = async (slug: string) => {
  const res = await client.getEntries({
    content_type: 'projects', // Replace with your content type ID
    'fields.slug': slug,
  });

  return res.items[0];
};

const Project = async ({ params }: ProjectProps) => {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <>{children}</>,
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        return (
          <img
            src={`https:${file.url}`}
            alt={title}
            style={{ maxHeight: '500px', padding: "2em 0" }}
          />
        );
      },
      // Add more custom renderers if needed
    },
  };

  return (
    <main>
      <section className='section section-center aboutproject'>
        <h1>{project.fields.title as string}</h1>
        {project.fields.image && (
        <img
          src={`https:${project.fields.image.fields.file.url}`}
          alt={project.fields.image.fields.title}
          className="contentful-thumbnail"
        />
      )}
        <div>{documentToReactComponents(project.fields.aboutproject as any, options)}</div>
        {/* Render other project details here */}
      </section>
    </main>
  );
};

export default Project;
