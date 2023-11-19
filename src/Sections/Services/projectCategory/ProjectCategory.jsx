import CategoryButton from './CategoryButton';
import { useState } from 'react';

const ProjectCategory = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className='portfolio__categories'>
      {categories.map((category, index) => (
        <CategoryButton
          key={index} 
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${activeCategory === category ? "primary" : "white"}`}
        />
      ))}
    </div>
  );
};

export default ProjectCategory;
