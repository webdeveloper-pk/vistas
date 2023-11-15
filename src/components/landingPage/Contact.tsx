import React from "react";
import SpinnerGrow from "../common/SpinnerGrow";

const Contact = ({ contactUs, handleChange, cResults, handleContactUs }: any) => {
  return (
    <div className="mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[30px] md:pb-[30px] lg:pb-[30px] xl:pb-[40px] 2xl:pb-[40px]">
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
        Have questions, suggestions, or just want to say hello? We'd love to hear from you. Please get in touch using
        this contact form.
      </p>
      <div className="mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[38px]">
        <form
          className="contact-form-wrapper p-[20px] mx-auto"
          data-aos="zoom-out"
          data-aos-duration="1000"
          onSubmit={(e) => {
            e.preventDefault();
            handleContactUs();
          }}
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
                name="name"
                value={contactUs.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-[49%]">
              <input
                placeholder="Email"
                type="email"
                className="w-full landing-input"
                name="email"
                value={contactUs.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="w-full mt-[15px]" data-aos="zoom-in" data-aos-duration="1500">
            <input
              placeholder="Subject"
              type="text"
              className="w-full landing-input"
              name="subject"
              value={contactUs.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mt-[15px]" data-aos="zoom-in" data-aos-duration="1500">
            <textarea
              placeholder="Write here"
              className="w-full landing-textarea"
              name="message"
              value={contactUs.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mt-[10px]" data-aos="zoom-in" data-aos-duration="1500">
            <button className="contact-btn text-[14px] lg:text-[15px] 2xl:text-[15.5px]">
              <span className="contact-submit">
                {cResults.loading ? (
                  <div className="flex justify-center items-center gap-1">
                    <SpinnerGrow />
                    Loading...
                  </div>
                ) : (
                  <>{cResults.success ? "Done" : "SUBMIT YOUR REQUEST"}</>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
