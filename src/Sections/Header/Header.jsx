// Importing the CSS file for the 'header' component

import "./header.css";
import "aos/dist/aos.css"

import  Aos  from "aos";
import HeaderPics from "../../Images/headerImage.jpg"; // Importing the header image
import { data2 } from "../../data"; // Importing 'data2' from external 'data' file
import { useEffect } from "react";

// Declaring the 'Header' functional component
const Header = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  return (
    // Creating a header section with an ID of 'header'
    <header id="header">
      {/* Container for the header section */}
      <div className="container header__container">
        {/* Profile section in the header */}
        <div className="header__profile" data-aos="fade-in">
          {/* Displaying the profile image */}
          <img src={HeaderPics} alt="headerPics" /> {/* Image source */}
        </div>
        <h3 data-aos="fade-up">Onu Princeley Toochukwu</h3> {/* Name */}
        <p data-aos="fade-up">
          {/* Description */}
          Web alchemist turning ideas into code. Crafting seamless online experiences with a touch of magic. Your digital dreams, my code reality.
        </p>
        {/* Call to action section */}
        <div className="header__cta" data-aos="fade-up">
          {/* Links for different actions */}
          <a href="#contact" className="btn primary">Let's Talk</a> {/* 'Let's Talk' button */}
          <a href="#portfolio" className="btn light">My Works</a> {/* 'My Works' button */}
        </div>
        {/* Social media links section */}
        <div className="header__socials">
          {/* Mapping through 'data2' array to display social media icons */}
          {data2.map(item => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon} {/* Displaying social media icon */}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header; // Exporting the 'Header' component as default
