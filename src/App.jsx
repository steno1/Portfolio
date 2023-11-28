import React, { useEffect, useRef, useState } from "react";

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

// Defining the main App component
const App = () => {
  // Accessing themeState from ThemeContext
  const { themeState } = useThemeContext();

  // Creating a reference to the main section of the website
  const mainRef = useRef();

  // State to control the visibility of the floating navigation
  const [showFloatingNav, setShowFloatingNav] = useState(true);

  // State to keep track of the vertical position of the site
  const [siteYposition, setSiteYposition] = useState(0);

  // Function to show the floating navigation
  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  // Function to hide the floating navigation
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // Effect to handle the showing and hiding of floating navigation based on siteYposition changes
  useEffect(() => {
    // Function to toggle floating navigation based on site's vertical position
    const floatingNavToggleHandler = () => {
      if (
        siteYposition < mainRef?.current?.getBoundingClientRect().y - 20 ||
        siteYposition > mainRef?.current?.getBoundingClientRect().y + 20
      ) {
        showFloatingNavHandler(); // Show floating navigation
      } else {
        hideFloatingNavHandler(); // Hide floating navigation
      }
      setSiteYposition(mainRef?.current?.getBoundingClientRect().y); // Update site's vertical position
    };

    // Set interval to check site's vertical position periodically (every 4000 milliseconds)
    const checkYposition = setInterval(floatingNavToggleHandler, 4000);

    // Clean up the interval to avoid memory leaks when the component unmounts
    return () => clearInterval(checkYposition);
  }, [siteYposition]);

  // Rendering the main content of the app
  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      {/* Different sections of the website */}
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme /> {/* Theme component */}
      {showFloatingNav && <FloatingNav />} {/* Conditional rendering of FloatingNav */}
    </main>
  );
};

// Exporting the App component as the default export
export default App;
