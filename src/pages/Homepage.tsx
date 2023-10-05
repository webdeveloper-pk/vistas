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
// import centerRadial from "../assets/images/center-radial.png";
// import rightRadial from "../assets/images/right-radial.png";
// import leftRadial from "../assets/images/left-radial.png";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
// import icon4 from "../assets/images/icon4.png";
import icon5 from "../assets/images/icon5.png";
// import icon6 from "../assets/images/icon6.png";
import icon7 from "../assets/images/icon7.png";
import icon8 from "../assets/images/icon8.png";
import icon9 from "../assets/images/icon9.png";
import icon10 from "../assets/images/icon10.png";

const Homepage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className="container">
      <div className="hero-radial-center relative">
        <div className="absolute center-radial">
          {/* <img src={centerRadial} alt="radial" className="center-radial-img" /> */}
        </div>
        <div className="left-radial">
          {/* <img src={leftRadial} alt="radial" className="left-radial-img" /> */}
        </div>
        <div className="absolute left-0 top-0 floating1">
          <img
            src={icon1}
            alt="icon1"
            className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] 2xl:w-[75px] 2xl:h-[75px]"
          />
        </div>
        <div className="absolute left-[10%] md:left-[15%] top-0 floating2">
          <img
            src={icon2}
            alt="icon2"
            className="w-[30px] h-[20px] lg:w-[40px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[35px]"
          />
        </div>
        <div className="absolute left-[12%] md:left-[17%] top-0 floating3">
          <img
            src={icon3}
            alt="icon3"
            className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] 2xl:w-[33px] 2xl:h-[33px]"
          />
        </div>
        <div className="absolute left-[15%] md:left-[25%] top-0 floating4">
          <img
            src={icon2}
            alt="icon4"
            className="w-[30px] h-[20px] lg:w-[40px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[35px]"
          />
        </div>
        <div className="absolute left-[20%] md:left-[30%] top-0 floating5">
          <img
            src={icon5}
            alt="icon5"
            className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] 2xl:w-[75px] 2xl:h-[75px]"
          />
        </div>
        <div className="absolute right-[12%] md:right-[22%] xl:right-[23%] 2xl:md:right-[22%] top-0 floating6">
          <img
            src={icon7}
            alt="icon6"
            className="w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] 2xl:w-[45px] 2xl:h-[45px]"
          />
        </div>
        <div className="absolute right-[8%] md:right-[17%] top-0 floating7">
          <img
            src={icon7}
            alt="icon7"
            className="w-[40px] h-[40px] lg:w-[75px] lg:h-[75px] 2xl:w-[95px] 2xl:h-[95px]"
          />
        </div>
        <div className="absolute right-[6%] md:right-[11%] top-0 floating8">
          <img
            src={icon8}
            alt="icon8"
            className="w-[20px] h-[43px] lg:w-[40px] lg:h-[73px] 2xl:w-[50px] 2xl:h-[83px]"
          />
        </div>
        <div className="absolute right-[2%] md:right-[2%] top-0 floating9">
          <img
            src={icon9}
            alt="icon9"
            className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] 2xl:w-[33px] 2xl:h-[33px]"
          />
        </div>
        <div className="absolute right-0 top-0 floating10">
          <img
            src={icon10}
            alt="icon10"
            className="w-[30px] h-[30px] lg:w-[70px] lg:h-[70px] 2xl:w-[86px] 2xl:h-[86px]"
          />
        </div>
        <Navbar />
        <div className="hero-radial-right relative">
          <div className="right-radial">
            {/* <img src={rightRadial} alt="radial" className="right-radial-img" /> */}
          </div>
          <div className="hero-wrapper-margin">
            <Hero />
          </div>
          <Working />
        </div>
      </div>
      <Winners />
      <About />
      <Contact />
      <LiveStream />
      <Footer />
    </div>
  );
};

export default Homepage;
