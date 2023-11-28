import "./FAQs.css"
import "aos/dist/aos.css"

import Aos  from "aos"
import FaQuestion from "./FaQuestion"
import { data7 } from "../../data"
import { useEffect } from "react"

const FAQs = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <section id="faqs">
<h2>Frequently Asked Questions</h2>
<p>Here are some questions I usually get. Click to toggle the answer, and if you still have some more questions, send me a message from the contact section! </p>
    <div className="container faqs__container" data-aos="fade-in">

{data7.map(faq=>(
  <FaQuestion key={faq.id} faq={faq}/>
))}
    </div>
    </section>
  )
}

export default FAQs
