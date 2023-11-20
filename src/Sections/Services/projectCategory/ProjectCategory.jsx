// Importing necessary components and resources

import CategoryButton from './CategoryButton'; // Importing 'CategoryButton' component
import { useState } from 'react'; // Importing 'useState' hook from React

// Declaring the 'ProjectCategory' functional component
const ProjectCategory = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("all"); // State to manage active category

  // Function to handle category change
  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat); // Setting active category
    onFilterProjects(activeCat); // Filtering projects based on category
  };

  return (
    // Container for project categories
    <div className='portfolio__categories'>
      {/* Mapping through categories to display buttons */}
      {categories.map((category, index) => (
        <CategoryButton
          key={index} // Unique key for each category button
          category={category} // Category value
          onChangeCategory={() => changeCategoryHandler(category)} // Handling category change
          className={`btn cat__btn ${activeCategory === category ? "primary" : "white"}`} // Adding classes based on active category
        />
      ))}
    </div>
  );
};

export default ProjectCategory; // Exporting the 'ProjectCategory' component as default
