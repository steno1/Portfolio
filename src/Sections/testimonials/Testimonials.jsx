import "./testimonials.css"
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay"

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react'
import TestimonialComponent from "./TestimonialComponent";
import { data6 } from "../../data";

const Testimonials = () => {
  return (
    <section id="testimonials">

<h2>What my clients say</h2>
<p>These are unbiased testimonials from some of my clients</p>
<div className="container">
<Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601:{slidesPerView:2},
          1025:{slidesPerView:3}
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination, Autoplay]}
        autoplay={false}
       
        className="mySwiper"
      >
       {data6.map(testimonial=>(
        <SwiperSlide key={testimonial.id} >
          <TestimonialComponent testimonial={testimonial}/>
        </SwiperSlide>
       ))}
      </Swiper>
</div>
    </section>
  )
}

export default Testimonials
