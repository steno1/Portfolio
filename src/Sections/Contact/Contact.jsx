import "./contact.css"

import { data8 } from "../../data"

const Contact = () => {
  return (
    <section id="contact">
<h2>Get In Contact</h2>
<p>Send me a message via any of the links below</p>
<div className="container contact__container" data-aos="fade-up">
{
data8.map(contact=>(
  <a key={contact.id} href={contact.link} target="_blank"
  rel="noopener noreferrer">{contact.icon}</a>
))
}

</div>
    </section>
  )
}

export default Contact
