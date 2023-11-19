import "./portfolio.css";

import ProjectCategory from "../Services/projectCategory/ProjectCategory";
import Projects from "../Services/projects/Project";
import { data5 } from "../../data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data5);

  const categories = data5.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectHandler = (category) => {
    if (category === "all") {
      setProjects(data5);
      return;
    }

    const filterProjects = data5.filter((project) => project.category === category);
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit There is no one who loves pain itself, who
        seeks after it and wants to have it, simply because it is pain...
      </p>
      <div className="container portfolio__container">
        <ProjectCategory categories={uniqueCategories} onFilterProjects={filterProjectHandler} />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
