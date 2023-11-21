import About from "./Sections/about/about"
import Contact from "./Sections/Contact/Contact"
import FAQs from "./Sections/FAQs/FAQs"
import FloatingNav from "./Sections/Floating-nav/FloatingNav"
import Footer from "./Sections/Footer/Footer"
import Header from "./Sections/Header/Header"
import Modal from "./Components/modal/Modal"
import Navbar from "./Sections/Navbar/Navbar"
import Portfolio from "./Sections/Portfolio/Portfolio"
import Services from "./Sections/Services/Services"
import Testimonials from "./Sections/testimonials/Testimonials"

const App = () => {
  return (
    <main>
     <Navbar/> 
     <Header/>
     <About/>
     <Services/>
     <Portfolio/>
     <Testimonials/>
     <FAQs/>
     <Contact/>
     <Footer/>
     <Modal/>
     {/* <FloatingNav/>*/}
     
    </main>
  )
}

export default App
