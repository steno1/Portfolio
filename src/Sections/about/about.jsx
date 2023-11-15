import "./about.css";

import Card from "../../Components/card/Card";
import HeaderPics from "../../Images/headerImage.jpg";
import { HiDownload } from "react-icons/hi";
import cv from "../../Images/headerImage.jpg";
import { data3 } from "../../data";

const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={HeaderPics} alt="AboutImage" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data3.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <div className="about__content">
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</p>
            <a href={cv} download className="btn primary">Download CV<HiDownload /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
