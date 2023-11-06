import React from "react";
import WorkingCard from "../common/WorkingCard";
import line1 from "../../assets/images/working-line1.png";
import line2 from "../../assets/images/working-line2.png";
import line3 from "../../assets/images/working-line-h-1.png";
import line4 from "../../assets/images/working-line-h-2.png";

const Working = () => {
  return (
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px]">
      <h1 className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
        How it works
      </h1>
      <div>
        <div className="mt-[40px] md:mt-[45px] lg:mt-[45px] xl:mt-[50px] 2xl:mt-[60px] pl-[20px] lg:pl-0">
          <div
            style={{ zIndex: 100, position: "relative" }}
            className="working-wrapper rounded-[25px] md:rounded-[30px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[39px] p-[15px] md:p-[18px] w-full flex flex-col lg:flex-row justify-between items-center gap-y-[30px]"
          >
            <div className=" block lg:hidden absolute -left-[20px] md:-left-[30px] top-[50px] md:top-[60px]">
              <img
                src={line3}
                alt="line3"
                className="working-line-1 h-[402px] md:h-[412px]"
              />
            </div>
            <div className="working-line-2 block lg:hidden absolute -left-[20px] md:-left-[30px] top-[50px] md:top-[60px]">
              <img src={line4} alt="line4" className="w-[30px] md:w-[40px]" />
            </div>
            <div className="working-line-3 block lg:hidden absolute -left-[20px] md:-left-[30px] top-[260px] md:top-[265px]">
              <img src={line4} alt="line4" className="w-[30px] md:w-[40px]" />
            </div>
            <div className="working-line-4 block lg:hidden absolute -left-[20px] md:-left-[30px] top-[452px] md:top-[472px]">
              <img src={line4} alt="line4" className="w-[30px] md:w-[40px]" />
            </div>
            <div
              className="w-full lg:w-[33%]"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <WorkingCard
                count="01"
                title="Secure Your Entry"
                description={`Send your payment to our designated burn wallet address and click "Get Started" to confirm your participation.`}
              />
            </div>
            <div
              className="w-full lg:w-[33%]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <WorkingCard
                count="02"
                title="Enter Your Lucky Numbers"
                description="Provide your details and enter your preferred lucky numbers in the form."
              />
            </div>
            <div
              className="w-full lg:w-[33%]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <WorkingCard
                count="03"
                title="Discover Your Winning Potential"
                description="Optimize Your Odds for Exceptional Prizes, Jackpot Included!"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:ml-[55px] xl:ml-[60px] 2xl:ml-[63px] relative">
        <img
          src={line2}
          alt="line2"
          className="h-[51px] absolute left-0 lg:top-[-10px] xl:top-[-10px]"
        />
      </div>
      <div className="hidden lg:block lg:mt-[40px] xl:mt-[40px] lg:ml-[55px] xl:ml-[60px]  2xl:ml-[63px]">
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
