import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px]">
      <h1
        className="section-title text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Contact us
      </h1>
      <p
        className="mx-auto section-description text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px]"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        venenatis diam eu mi auctor mollis. Cras iaculis, ligula non pharetra
        sagittis, neque turpis lacinia lorem
      </p>
      <div className="mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[38px]">
        <div
          className="contact-form-wrapper p-[20px] mx-auto"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <div
            className="w-full flex flex-col gap-y-[15px] md:flex-row md:justify-between items-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
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
          <div
            className="w-full mt-[15px]"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <input
              placeholder="Subject"
              type="text"
              className="w-full landing-input"
            />
          </div>
          <div
            className="w-full mt-[15px]"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <textarea
              placeholder="Write here"
              className="w-full landing-textarea"
            />
          </div>
          <div
            className="w-full mt-[10px]"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <button className="contact-btn text-[14px] lg:text-[15px] 2xl:text-[15.5px]">
              <span className="contact-submit">SUBMIT YOUR REQUEST</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
