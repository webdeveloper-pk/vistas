import React from "react";

const LiveStream = () => {
  return (
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[40px] md:pb-[40px] lg:pb-[50px] xl:pb-[50px] 2xl:pb-[60px]">
      <h1
        className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Live Stream
      </h1>
      <p
        className="mx-auto section-description text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        venenatis diam eu mi auctor mollis. Cras iaculis, ligula non pharetra
        sagittis, neque turpis lacinia lorem
      </p>
      <div className="mt-[30px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[60px]">
        <div className="live-stream-wrapper mx-auto relative">
          <div className="absolute center-position">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="86"
              viewBox="0 0 86 86"
              fill="none"
              className="w-[60px] h-[60px] md:w-[65px] md:h-[65px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] 2xl:w-[85px] 2xl:h-[85px]"
            >
              <path
                d="M43 75.25C60.8112 75.25 75.25 60.8112 75.25 43C75.25 25.1888 60.8112 10.75 43 10.75C25.1888 10.75 10.75 25.1888 10.75 43C10.75 60.8112 25.1888 75.25 43 75.25Z"
                stroke="white"
                stroke-width="7.16667"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M53.75 43L35.8333 32.25V53.75L53.75 43Z"
                stroke="white"
                stroke-width="7.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="absolute top-[8px] right-[8px]">
            <div
              className="flex items-center gap-x-[10px]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="normal-text text-[14px] md:text-[15px] 2xl:text-[16px] uppercase">
                22 Views
              </p>
              <button className="flex items-center justify-center text-center live-text text-[15px] md:text-[16px] 2xl:text-[17px] gap-x-[3px] live-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#FF3939" />
                </svg>
                <span>LIVE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
