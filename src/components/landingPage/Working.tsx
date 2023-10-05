import React from "react";
import WorkingCard from "../common/WorkingCard";

const Working = () => {
  return (
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px]">
      <h1 className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
        How it works
      </h1>
      <div className="mt-[40px] md:mt-[45px] lg:mt-[45px] xl:mt-[50px] 2xl:mt-[60px] pl-[20px] lg:pl-0 ">
        <div className="working-wrapper rounded-[25px] md:rounded-[30px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[39px] p-[15px] md:p-[18px] w-full flex flex-col lg:flex-row justify-between items-center gap-y-[30px]">
          <div className="w-full lg:w-[33%]">
            <WorkingCard
              count="01"
              title="Make A Payment"
              description="Send payment to our wallet and get yourself In."
            />
          </div>
          <div className="w-full lg:w-[33%]">
            <WorkingCard
              count="02"
              title="Get Lucky Number"
              description="Fill out the form with your details and lucky numbers."
            />
          </div>
          <div className="w-full lg:w-[33%]">
            <WorkingCard
              count="03"
              title="Get Your Profit"
              description="Get a chance to win amazing prizes! & Jackpot."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
