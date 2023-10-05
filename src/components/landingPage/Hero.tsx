import React from "react";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="mx-auto homepage-container flex flex-col items-center text-center px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] py-[60px] md:py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[96px]">
      <h1
        className="hero-title hero-title-animation text-[24px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mx-auto px-[20px] md:px-0"
        style={{ zIndex: 100, position: "relative" }}
      >
        Ready for a
        <span className="gradient-text mx-3">chance to win big?</span>
        You're in the right place!
      </h1>
      <p
        className="hero-description hero-subtitle-animation my-[20px] md:my-[24px] lg:my-[26px] text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] px-[10px] md:px-0"
        style={{ zIndex: 100, position: "relative" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis nec
        ligula eleifend placerat
      </p>
      <button
        className="get-started-btn-hero get-started-btn-hero middle-out text-black hover:text-black transition duration-700 ease-in-out delay-100 text-[14px] md:text-[15px] 2xl:text-[16px]"
        style={{ zIndex: 100, position: "relative" }}
        data-aos="zoom-out"
        data-aos-duration="1500"
      >
        Let’s Get Started
      </button>
      <div
        className="flex justify-center mt-[30px] md:mt-[34px] 2xl:mt-[36px]"
        style={{ zIndex: 100, position: "relative" }}
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img
          src={hero}
          alt="hero"
          className="w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[100%]"
        />
      </div>
    </div>
  );
};

export default Hero;
