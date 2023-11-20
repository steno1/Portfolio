// Importing necessary components and resources

import MyProject from '../MyProject/MyProject'; // Importing 'MyProject' component
import React from 'react'; // Importing 'React' library

// Declaring the 'Projects' functional component
const Projects = ({ projects }) => {
  return (
    // Container for displaying projects
    <div className='portfolio__projects'>
      {/* Mapping through projects to display 'MyProject' component */}
      {projects.map(project => (
        <MyProject key={project.id} project={project} /> // 'MyProject' component with unique key and project data
      ))}
    </div>
  );
};

export default Projects; // Exporting the 'Projects' component as default
