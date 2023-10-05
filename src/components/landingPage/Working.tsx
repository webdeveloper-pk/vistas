import React from "react";
import WorkingCard from "../common/WorkingCard";
import line1 from "../../assets/images/working-line1.png";
import line2 from "../../assets/images/working-line2.png";

const Working = () => {
  return (
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px]">
      <h1 className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
        How it works
      </h1>
      <div className="mt-[40px] md:mt-[45px] lg:mt-[45px] xl:mt-[50px] 2xl:mt-[60px] pl-[0px] lg:pl-0">
        <div
          style={{ zIndex: 100, position: "relative" }}
          className="working-wrapper rounded-[25px] md:rounded-[30px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[39px] p-[15px] md:p-[18px] w-full flex flex-col lg:flex-row justify-between items-center gap-y-[30px]"
        >
          <div
            className="w-full lg:w-[33%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <WorkingCard
              count="01"
              title="Make A Payment"
              description="Send payment to our wallet and get yourself In."
            />
          </div>
          <div
            className="w-full lg:w-[33%]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <WorkingCard
              count="02"
              title="Get Lucky Number"
              description="Fill out the form with your details and lucky numbers."
            />
          </div>
          <div
            className="w-full lg:w-[33%]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <WorkingCard
              count="03"
              title="Get Your Profit"
              description="Get a chance to win amazing prizes! & Jackpot."
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:ml-[55px] xl:ml-[60px] relative">
        <img
          src={line2}
          alt="line2"
          className="h-[51px] absolute left-0 lg:top-[-10px] xl:top-[-10px]"
        />
      </div>
      <div className="hidden lg:block lg:mt-[40px] xl:mt-[40px] lg:ml-[55px] xl:ml-[60px]">
        <img src={line1} alt="line1" className="w-[68%]" />
      </div>
      <div className="hidden lg:block relative lg:ml-[35.7%] xl:ml-[36%] 2xl:ml-[35.2%]">
        <img
          src={line2}
          alt="line2"
          className="h-[51px] absolute left-[20px] top-[-50px]"
        />
      </div>
      <div className="hidden lg:block relative lg:ml-[68%] xl:ml-[68.5%] 2xl:ml-[68%]">
        <img
          src={line2}
          alt="line2"
          className="h-[51px] absolute left-[20px] lg:top-[-51px] xl:top-[-50px]"
        />
      </div>
    </div>
  );
};

export default Working;

// transform rotate-90
