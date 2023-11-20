// Importing necessary components and resources

import Card from '../../Components/card/Card'; // Importing 'Card' component
import React from 'react'; // Importing 'React' library

// Declaring the 'TestimonialComponent' functional component
const TestimonialComponent = ({ testimonial }) => {
  return (
    // Card component to display testimonial
    <Card className='light'>
      <p>{testimonial.quote}</p> {/* Testimonial quote */}
      {/* Testimonial client details */}
      <div className='testimonial__client'>
        <div className='testimonial__client-avatar'>
          {/* Displaying client avatar */}
          <img src={testimonial.avatar} alt='avatar for testimonials' />
        </div>
        <div className='testimonial__client-details'>
          {/* Client name */}
          <h6>{testimonial.name}</h6>
          {/* Client profession */}
          <small>{testimonial.profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialComponent; // Exporting the 'TestimonialComponent' component as default
