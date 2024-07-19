import Link from 'next/link'
import React from 'react'
import { FaGithub, FaShareSquare } from 'react-icons/fa'

interface Fields {
    title: string
      projecturl: string
      githuburl: string
      stack: { id: string; name: string }[];
      image: {
        fields: {
          file: {
            url: string
          }
        }
      };
      slug: string
      category: string
  }

const Project: React.FC<Fields> = ({title, projecturl, githuburl, stack, image, slug}) => {
  return (
    <article className="single-project">
            <div className="image-wrapper">
                <img src={image.fields.file.url && image.fields.file.url}  className="img" alt={title} />
            </div>
            <div className="content-wrapper">
              <a
                href={projecturl}
                target="_blank"
                rel="noreferrer"
                className="fa-share-square"
              >
                <FaShareSquare className="share-icon" />
              </a>
              <div className="project-info">
                <h4>{title}</h4>
                <div className="stack-items">
                  {stack?.map(item => (
                    <p key={item.id}>{item.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="single-project-footer">
              <a href="https://github.com/majedul-dev" target="blank">
                <i className="fab fa-github">
                  <FaGithub />
                </i>
              </a>
              <Link href={`/projects/${slug}`}>About Project</Link>
              <a href={githuburl} target="_blank" rel="noreferrer">
                source code
              </a>
            </div>
          </article>
  )
}

export default Project