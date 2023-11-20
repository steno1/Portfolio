// Importing the CSS files and necessary modules

import "./testimonials.css"; // Importing 'testimonials.css' file
import 'swiper/css'; // Importing 'swiper' CSS
import 'swiper/css/pagination'; // Importing 'pagination' CSS from 'swiper'
import "swiper/css/autoplay"; // Importing 'autoplay' CSS from 'swiper'

import { Autoplay, Pagination } from 'swiper/modules'; // Importing 'Autoplay' and 'Pagination' modules from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'; // Importing 'Swiper' and 'SwiperSlide' components from 'swiper/react'

import React from 'react'; // Importing 'React' library
import TestimonialComponent from "./TestimonialComponent"; // Importing 'TestimonialComponent'
import { data6 } from "../../data"; // Importing 'data6' from external 'data' file

// Declaring the 'Testimonials' functional component
const Testimonials = () => {
  return (
    // Testimonials section
    <section id="testimonials">
      <h2>What my clients say</h2> {/* Title */}
      <p>These are unbiased testimonials from some of my clients</p> {/* Description */}
      <div className="container">
        {/* Swiper component for testimonials */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 }
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={false}
          className="mySwiper"
        >
          {/* Mapping through data6 to display testimonials */}
          {data6.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialComponent testimonial={testimonial} /> {/* Displaying 'TestimonialComponent' for each testimonial */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials; // Exporting the 'Testimonials' component as default
