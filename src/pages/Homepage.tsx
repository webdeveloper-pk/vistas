import React from "react";
import AOS from "aos";
import Navbar from "../components/common/Navbar";
// import Hero from "../components/landingPage/Hero";
import About from "../components/landingPage/About";
// import Contact from "../components/landingPage/Contact";
// import Faq from "../components/landingPage/Faq";
import Footer from "../components/common/Footer";
import Hero from "../components/landingPage/Hero";
import Working from "../components/landingPage/Working";
import Winners from "../components/landingPage/Winners";
import Contact from "../components/landingPage/Contact";
import LiveStream from "../components/landingPage/LiveStream";

const Homepage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="hero-wrapper-margin">
        <Hero />
      </div>
      <Working />
      <Winners />
      <About />
      <Contact />
      <LiveStream />
      <Footer />
    </div>
  );
};

export default Homepage;
