import "./Floating.css"; // Import CSS styles for the floating navigation bar

import Nav from "./Nav"; // Import Nav component for individual navigation items
import Scrollspy from 'react-scrollspy'; // Import Scrollspy component for tracking scroll positions
import floatNavData from "../../floatNavData"; // Import data for floating navigation items

const FloatingNav = () => {
  // Render the floating navigation bar
  return (
    <ul id="floating__nav">
      {/* Scrollspy component tracks scroll positions and highlights active sections */}
      <Scrollspy 
        offset={-500} // Sets an offset for scrolling to adjust for header size
        className="scrollspy" // CSS class for Scrollspy component
        items={['header', 'about', 'services', 'portfolio', 'contact']} // Array of section IDs to track
        currentClassName="active" // CSS class for the currently active section
      >
        {
          // Map through floatNavData to generate navigation items using the Nav component
          floatNavData.map(item => <Nav key={item.id} item={item} />)
        }
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
