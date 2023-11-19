import Card from '../../Components/card/Card'
import React from 'react'

const TestimonialComponent = ({testimonial}) => {
  return (
   <Card className='light'>
<p>{testimonial.quote}</p>
<div className='testimonial__client'>
    <div className='testimonial__client-avatar'>
    <img src={testimonial.avatar} alt='avatar for testimonials'/>

    </div>
    <div className='testimonial__client-details'>
    <h6>{testimonial.name}</h6>
    <small>{testimonial.profession}</small>
    </div>

</div>
   </Card>
  )
}

export default TestimonialComponent
