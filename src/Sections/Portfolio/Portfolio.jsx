// Importing the CSS file for the 'Portfolio' component

import "./portfolio.css";

import ProjectCategory from "../Services/projectCategory/ProjectCategory"; // Importing 'ProjectCategory' component
import Projects from "../Services/projects/Project"; // Importing 'Projects' component
import { data5 } from "../../data"; // Importing 'data5' from external 'data' file
import { useState } from "react"; // Importing 'useState' hook from React

// Importing necessary components and resources





// Declaring the 'Portfolio' functional component
const Portfolio = () => {
  // State to manage projects
  const [projects, setProjects] = useState(data5);

  // Extracting unique categories from data5
  const categories = data5.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)]; // Generating unique categories

  // Function to filter projects based on category
  const filterProjectHandler = (category) => {
    if (category === "all") {
      // Display all projects if category is 'all'
      setProjects(data5);
      return;
    }

    // Filter projects based on selected category
    const filterProjects = data5.filter((project) => project.category === category);
    setProjects(filterProjects); // Updating displayed projects
  };

  return (
    // Portfolio section
    <section id="portfolio">
      <h2>Recent Projects</h2> {/* Title */}
      <p>
        {/* Description */}
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit There is no one who loves pain itself, who
        seeks after it and wants to have it, simply because it is pain...
      </p>
      {/* Container for portfolio */}
      <div className="container portfolio__container">
        {/* Component to filter project categories */}
        <ProjectCategory categories={uniqueCategories} onFilterProjects={filterProjectHandler} />
        {/* Component to display projects */}
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio; // Exporting the 'Portfolio' component as default
