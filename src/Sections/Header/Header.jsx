import "./header.css"

import HeaderPics from "../../Images/headerImage.jpg"
import { data2 } from "../../data"

const Header = () => {
  return (
    <header id="header">
<div className="container header__container">
<div className="header__profile">
  <img src={HeaderPics} alt="headerPics"/>
</div>
<h3>Onu Princeley Toochukwu</h3>
<p>Web alchemist turning ideas into code. Crafting seamless online experiences with a touch of magic. Your digital dreams, my code reality.</p>
<div  className="header__cta">
<a href="#contact">Let Talk</a>
<a href="#portfolio">My Works</a>

</div>
<div className="header__socials">
{data2.map(item=><a key={item.id} href={item.link} target="_blank"
rel="noopener noreferrer">
{item.icon}
</a>)}

</div>
</div>
    </header>
  )
}

export default Header
