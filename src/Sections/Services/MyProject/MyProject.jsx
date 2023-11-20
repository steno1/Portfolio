// Importing necessary components and resources

import Card from '../../../Components/card/Card'; // Importing 'Card' component
import React from 'react'; // Importing 'React' library

// Declaring the 'MyProject' functional component
const MyProject = ({ project }) => {
  return (
    // Card component to display a project
    <Card className='portfolio__project'>
      {/* Project image */}
      <div className='portfolio__project-image'>
        <img src={project.images} alt='portfolioImage' /> {/* Displaying project image */}
      </div>
      {/* Project title */}
      <h4>{project.title}</h4>
      {/* Project description */}
      <p>{project.desc}</p>
      {/* Buttons for project actions */}
      <div className='portfolio__project-cta'>
        {/* Button to view project demo */}
        <a href={project.demo} className='btn sm' target='_blank' rel='noopener noreferrer'>
          Demo
        </a>
        {/* Button to view project on Github */}
        <a href={project.demo} className='btn primary' target='_blank' rel='noopener noreferrer'>
          Github
        </a>
      </div>
    </Card>
  );
};

export default MyProject; // Exporting the 'MyProject' component as default
