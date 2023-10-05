import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px]">
      <h1 className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
        Contact us
      </h1>
      <p className="mx-auto section-description text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        venenatis diam eu mi auctor mollis. Cras iaculis, ligula non pharetra
        sagittis, neque turpis lacinia lorem
      </p>
      <div className="mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[38px]">
        <div className="contact-form-wrapper p-[20px] mx-auto">
          <div className="w-full flex flex-col gap-y-[15px] md:flex-row md:justify-between items-center">
            <div className="w-full md:w-[49%]">
              <input
                placeholder="Name"
                type="text"
                className="w-full landing-input"
              />
            </div>
            <div className="w-full md:w-[49%]">
              <input
                placeholder="Email"
                type="email"
                className="w-full landing-input"
              />
            </div>
          </div>
          <div className="w-full mt-[15px]">
            <input
              placeholder="Subject"
              type="text"
              className="w-full landing-input"
            />
          </div>
          <div className="w-full mt-[15px]">
            <textarea
              placeholder="Write here"
              className="w-full landing-textarea"
            />
          </div>
          <div className="w-full mt-[10px]">
            <button className="contact-btn text-[14px] lg:text-[15px]">
              <span className="gradient-text">SUBMIT YOUR REQUEST</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
