// Importing the CSS file for the 'about' component

import "./about.css";

import Card from "../../Components/card/Card"; // Importing the 'Card' component
import HeaderPics from "../../Images/headerImage.jpg"; // Importing the header image
import { HiDownload } from "react-icons/hi"; // Importing the 'HiDownload' icon from 'react-icons/hi' package
import cv from "../../Images/headerImage.jpg"; // Importing the CV image
import { data3 } from "../../data"; // Importing 'data3' from external 'data' file

// Importing necessary components and resources






// Declaring the 'About' functional component
const About = () => {
  return (
    // Creating a section with an ID of 'about'
    <section id='about'>
      {/* Container for the about section */}
      <div className="container about__container">
        {/* Left section of the about */}
        <div className="about__left">
          {/* Displaying the portrait image */}
          <div className="about__portrait">
            <img src={HeaderPics} alt="AboutImage" /> {/* Image source */}
          </div>
        </div>
        {/* Right section of the about */}
        <div className="about__right">
          <h2>About Me</h2> {/* Title */}
          {/* Displaying a set of cards based on data3 */}
          <div className="about__cards">
            {/* Mapping through 'data3' array to display cards */}
            {data3.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span> {/* Displaying icon */}
                <h5>{item.title}</h5> {/* Displaying title */}
                <small>{item.desc}</small> {/* Displaying description */}
              </Card>
            ))}
          </div>
          {/* Content section of about */}
          <div className="about__content">
            <p>
              {/* Displaying a paragraph with a quote */}
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</p> {/* Another paragraph */}
            {/* Link to download CV */}
            <a href={cv} download className="btn primary">
              Download CV<HiDownload /> {/* Download icon */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; // Exporting the 'About' component as default
