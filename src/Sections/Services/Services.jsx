// Importing the CSS file for the 'Services' component

import "./services.css";

import Card from "../../Components/card/Card"; // Importing 'Card' component
import { data4 } from "../../data"; // Importing 'data4' from external 'data' file

// Declaring the 'Services' functional component
const Services = () => {
  return (
    // Services section
    <section id="services">
      <h2>My Services</h2> {/* Title */}
      <p>I give you the best in all the services below</p> {/* Description */}
      <div className="container services__container" data-aos="fade-up">
        {/* Mapping through 'data4' to display service cards */}
        {data4.map((item) => (
          <Card key={item.id} className="service light">
            {/* Service icon */}
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              {/* Service title */}
              <h4>{item.title}</h4>
              {/* Service description */}
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services; // Exporting the 'Services' component as default
