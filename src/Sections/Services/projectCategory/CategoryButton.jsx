// Importing necessary libraries

import React from 'react'; // Importing 'React' library

// Declaring the 'CategoryButton' functional component
const CategoryButton = ({ category, className, onChangeCategory }) => {
  return (
    // Button component for filtering categories
    <button className={className} onClick={() => onChangeCategory(category)}>
      {category} {/* Displaying the category */}
    </button>
  );
};

export default CategoryButton; // Exporting the 'CategoryButton' component as default
