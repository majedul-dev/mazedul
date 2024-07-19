'use client';

import { fetchEntries } from "@/lib/contentful";
import { useEffect, useState } from 'react';
import { Entry } from 'contentful';
import Project from "@/components/Project";

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



const Projects = () => {
  const [entries, setEntries] = useState<Entry<Fields>[]>([]);
  const [items, setItems] = useState<Fields[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  
  useEffect(() => {
    async function getEntries() {
      const fetchedEntries = await fetchEntries();
      setEntries(fetchedEntries);
    }
    getEntries();
  }, []);

   // Extract categories from projects
  useEffect(() => {
    const categoriesSet = new Set<string>();
    entries && entries.forEach((project) => {
      categoriesSet.add(project.fields.category);
    });

    const uniqueCategories = ["all", ...categoriesSet]; // Convert Set to array
    setCategories(uniqueCategories);
  }, [entries]);

   // Filter projects based on selected category
   useEffect(() => {
    if (selectedCategory === "all") {
      setItems(entries);
    } else {
      const filteredItems = entries.filter(
        (project) => project.fields.category === selectedCategory
      );
      setItems(filteredItems);
    }
  }, [entries, selectedCategory]);
  console.log(categories)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  const showLink = false;
  
  return (
    <section className="section">
      <div className="project-category">
        {!showLink && (
          <>
            <label htmlFor="category">Filter by Stacks</label>
            <select
              name="category"
              id="category"
              onChange={handleCategoryChange}
              className="text-capitalize"
            >
              {categories && categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
               ))}
            </select>
          </>
        )}
      </div>
      <div className="projects section-center">
        {items && items.length > 0 ? items.map(item => {
              return (
                <Project {...item.fields} />
              )
            })
          : (
            <p>No projects found</p>
          )}
      </div>
    </section>
  )
}


export default Projects