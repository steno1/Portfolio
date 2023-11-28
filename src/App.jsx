import { useEffect, useRef, useState } from "react";

import About from "./Sections/about/about";
import Contact from "./Sections/Contact/Contact";
import FAQs from "./Sections/FAQs/FAQs";
import FloatingNav from "./Sections/Floating-nav/FloatingNav";
import Footer from "./Sections/Footer/Footer";
import Header from "./Sections/Header/Header";
import Navbar from "./Sections/Navbar/Navbar";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Services from "./Sections/Services/Services";
import Testimonials from "./Sections/testimonials/Testimonials";
import Theme from "./Theme/Theme";
import { useThemeContext } from "./Context/ThemeContext";

const App = () => {
  // Retrieve themeState and mainRef using React Hooks
  const { themeState } = useThemeContext(); // Accessing theme information using useContext from ThemeContext
  const mainRef = useRef(); // Creating a reference to the main HTML element

  // State variables for managing floating navigation display and site position
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYposition, setSiteYposition] = useState(0);

  // Function to display the floating navigation
  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  // Function to hide the floating navigation
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // Function to toggle the floating navigation based on scroll position
  const floatingNavToggleHandler = () => {
    // Check if the user scrolled up or down at least 20px
    if (
      siteYposition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYposition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler(); // Display floating navigation if conditions are met
    } else {
      hideFloatingNavHandler(); // Hide floating navigation if conditions are not met
    }
    setSiteYposition(mainRef?.current?.getBoundingClientRect().y); // Update site position
  };

  // UseEffect hook to handle floating navigation based on scroll behavior
  useEffect(() => {
    // Set interval to check scroll position every 4000 milliseconds
    const checkYposition = setInterval(floatingNavToggleHandler, 4000);
    // Cleanup function to clear the interval
    return () => clearInterval(checkYposition);
  }, [ siteYposition]);

  // Return the main App layout
  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      {/* Render various sections and components */}
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {/* Render the floating navigation if showFloatingNav is true */}
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
