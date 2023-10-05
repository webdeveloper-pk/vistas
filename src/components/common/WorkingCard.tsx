import React from "react";

const WorkingCard = ({ count, title, description }: any) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-x-[30px] lg:gap-x-[20px] xl:gap-x-[25px] 2xl:gap-x-[30px] gap-y-[30px]">
      <div className="lg:w-[70px] lg:h-[70px] xl:w-[85px] xl:h-[85px]">
        <div className="working-card-inner rounded-[20px] md:rounded-[20px] lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[33px] flex justify-center items-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[70px] lg:h-[70px] xl:w-[85px] xl:h-[85px] 2xl:w-[90px] 2xl:h-[90px]">
          <span className="working-count text-[20px] md:text-[22px] lg:text-[20px] xl:text-[23px] 2xl:text-[30px]">
            {count}
          </span>
        </div>
      </div>
      <div>
        <p className="working-card-title text-[17px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] mb-[8px]">
          {title}
        </p>
        <p className="working-card-description text-[14px] md:text-[14px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] w-full md:w-[80%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkingCard;
