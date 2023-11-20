// Importing the CSS file for the 'Footer' component

import './footer.css';

import { links, socials } from '../../data'; // Importing 'links' and 'socials' from external 'data' file

import React from 'react'; // Importing 'React' library

// Importing necessary components and resources



// Declaring the 'Footer' functional component
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Getting the current year

  return (
    // Footer section
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {/* Mapping through 'links' to display footer links */}
          {links.map((flink) => (
            <li key={flink.id}>
              <a href={flink.link}>{flink.title}</a> {/* Displaying link */}
            </li>
          ))}
        </ul>
        {/* Displaying social media icons */}
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon} {/* Displaying social media icon */}
            </a>
          ))}
        </div>
      </div>
      {/* Displaying copyright */}
      <div className="footer__copyright">
        <small>{`${currentYear} Princeley © All Rights Reserved`}</small> {/* Copyright */}
      </div>
    </footer>
  );
};

export default Footer; // Exporting the 'Footer' component as default
