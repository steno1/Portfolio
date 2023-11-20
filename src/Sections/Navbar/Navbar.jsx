// Importing the CSS file for the 'Navbar' component

import "./Navbar.css";

import { IoColorPaletteSharp } from 'react-icons/io5'; // Importing the 'IoColorPaletteSharp' icon from 'react-icons/io5'
import Logo  from "../../Images/my logo.webp"; // Importing the logo image
import { data } from "../../data"; // Importing 'data' from external 'data' file

// Importing necessary components and resources




// Declaring the 'Navbar' functional component
const Navbar = () => {
  return (
    // Navigation section
    <nav>
      {/* Container for the navigation */}
      <div className="container nav__container">
        {/* Logo linking to index.html */}
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="logo" /> {/* Displaying the logo */}
        </a>
        {/* Menu list */}
        <ul className="nav__menu">
          {/* Mapping through 'data' array to display navigation items */}
          {data.map((item) => (
            <li key={item.id}>
              {/* Each navigation item */}
              <a href={item.link}>{item.title}</a> {/* Displaying title */}
            </li>
          ))}
        </ul>
        {/* Theme icon button */}
        <button id="theme__icon"><IoColorPaletteSharp/></button> {/* Displaying theme icon */}
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the 'Navbar' component as default
