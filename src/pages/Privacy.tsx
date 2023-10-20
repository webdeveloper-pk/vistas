import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Privacy = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="text-white mx-auto homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] pb-[30px] md:pb-[30px] lg:pb-[30px] xl:pb-[40px] 2xl:pb-[60px]">
        <h1 className="mt-[50px] lg:mt-[150px] hero-title text-[24px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mx-auto pb-[20px]">
          Privacy
        </h1>
        <div className="flex justify-center">
          <p className="w-full lg:w-[80%] xl:w-[70%] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] text-center mb-[20px]">
            At VISTAS, we are committed to safeguarding your privacy and
            protecting your personal information. We understand the importance
            of transparency, security, and individual control over personal
            data. This Privacy Policy outlines how we collect, use, store, and
            share information within our decentralized community.
          </p>
        </div>
        <h2 className="mt-[15px] px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto text-center lg:text-left text-white font-semibold uppercase text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">
          1. Information We Collect
        </h2>
        <ul className="text-center lg:text-left px-[15px] lg:px-[50px] w-full lg:w-[90%] mx-auto">
          <li className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px] ml-0 mb-5">
            <b className="font-extrabold">- User-Generated Information:</b> We
            collect information provided voluntarily by our community members.
            This may include usernames, email addresses, and other data shared
            during registration or interactions with VISTAS.
          </li>
          <li className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] ml-0 mb-5">
            <b className="font-extrabold">- Transaction Data:</b> On the
            blockchain, all transactions are publicly recorded. We may collect
            and process data related to your blockchain transactions for the
            purpose of participation in our activities.
          </li>
          <li className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] ml-0 mb-5">
            <b className="font-extrabold">- Third-party Information:</b> In some
            instances, we may receive data from third-party services, such as
            blockchain explorers, to verify and confirm transactions.
          </li>
        </ul>

        <h2 className="mt-[15px] lg:mt-[30px] px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto text-center lg:text-left text-white font-semibold uppercase text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">
          2. How We Use Your Information
        </h2>
        <ul className="text-center lg:text-left px-[15px] lg:px-[50px] w-full lg:w-[90%] mx-auto">
          <li className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px] ml-0 mb-5">
            <b className="font-extrabold">- Community Participation:</b> We use
            the information you provide to facilitate your participation within
            the VISTAS community. This includes verifying your eligibility to
            join certain activities and distributing rewards.
          </li>
          <li className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] ml-0 mb-5">
            <b className="font-extrabold">- Communication:</b> We may use your
            contact information to send you important updates, notifications,
            and respond to inquiries.
          </li>
          <li className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] ml-0 mb-5">
            <b className="font-extrabold">- Security and Compliance:</b>{" "}
            Information collected is also used for security purposes and to
            ensure compliance with our terms and conditions.
          </li>
        </ul>

        <h2 className="mt-[15px] lg:mt-[30px] px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto text-center lg:text-left text-white font-semibold uppercase text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">
          3. Data Security
        </h2>
        <div className="px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto">
          <p className="text-center lg:text-left text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px]">
            We employ industry-standard measures to protect your information.
            However, it's important to note that as a decentralized autonomous
            organization, we do not have direct control over the security of the
            blockchain itself. Members are encouraged to take personal
            precautions to protect their digital assets.
          </p>
        </div>
        <h2 className="mt-[15px] lg:mt-[30px] px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto text-center lg:text-left text-white font-semibold uppercase text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">
          4. Data Sharing
        </h2>
        <div className="px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto">
          <p className="text-center lg:text-left text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px] ml-0 mb-5">
            VISTAS is a decentralized entity, and your information is shared
            within the community on the blockchain as required for operational
            transparency. We do not share your personal information with
            external third parties, except where required by law.
          </p>
        </div>
        <h2 className="mt-[15px] lg:mt-[30px] px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto text-center lg:text-left text-white font-semibold uppercase text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">
          5. Your Rights
        </h2>
        <div className="px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto">
          <p className=" text-center lg:text-left text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px] ml-0 mb-5">
            As a member of VISTAS, you have certain rights over your personal
            data, including access, correction, deletion, and data portability.
            You can exercise these rights by interacting directly with the
            blockchain and participating in the VISTAS community.
          </p>
        </div>
        <h2 className="mt-[15px] lg:mt-[30px] px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto text-center lg:text-left text-white font-semibold uppercase text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">
          6. Changes to the Privacy Policy
        </h2>
        <div className="px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto">
          <p className="text-center lg:text-left text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px] ml-0 mb-5">
            VISTAS may update this Privacy Policy as needed to reflect changes
            in our operations or legal requirements. We will notify our
            community members of significant changes.
          </p>
        </div>
        <h2 className="mt-[15px] lg:mt-[30px] px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto text-center lg:text-left text-white font-semibold uppercase text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]">
          7. Contact Us
        </h2>
        <div className="px-[10px] lg:px-[30px] w-full lg:w-[90%] mx-auto">
          <p className="text-center lg:text-left text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] mt-[20px] md:mt-[20px] lg:mt-[20px] xl:mt-[20px] 2xl:mt-[23px] ml-0">
            If you have any questions, concerns, or requests regarding your
            privacy or this Privacy Policy, please contact us using the contact
            information provided on our website.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
