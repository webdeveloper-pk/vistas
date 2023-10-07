import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/footer-logo.png";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="">
      <div className="homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] mx-auto">
        <div className="footer-wrapper px-[20px] md:px-[30px] lg:px-[45px] py-[20px] lg:py-[30px] flex flex-col gap-y-[40px] items-center lg:flex-row md:justify-between md:items-center">
          <nav className="flex flex-col lg:flex-row items-center gap-x-[50px] 2xl:gap-x-[65px] gap-y-[30px]">
            <div
              data-aos={location?.pathname === "/" ? "fade-right" : ""}
              data-aos-duration={location?.pathname === "/" ? "1000" : ""}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[90px] h-auto md:w-[100px] lg:w-[110px] lg:h-auto xl:w-[120px] 2xl:w-[130px] xl:h-auto"
                />
              </Link>
            </div>
            <ul
              className="nav-list flex flex-col gap-x-[25px] gap-y-[10px] lg:flex-row uppercase text-center md:text-left text-[14px] md:text-[15px] 2xl:text-[16px]"
              data-aos={location?.pathname === "/" ? "fade-up" : ""}
              data-aos-duration={location?.pathname === "/" ? "1000" : ""}
            >
              <li>
                <a href="#home" className="footer-link">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  Terms & COnditions
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  FAQs
                </a>
              </li>
            </ul>
          </nav>
          <div
            className="flex justify-center gap-x-[30px] xl:gap-x-[40px]"
            data-aos={location?.pathname === "/" ? "fade-left" : ""}
            data-aos-duration={location?.pathname === "/" ? "1000" : ""}
          >
            <a href="#!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="text-[white] hover:text-[#FFC905] w-[30px] h-[30px] md:text-[40px] md:h-[40px] xl:w-[45px] xl:h-[45px] 2xl:w-[48px] 2xl:h-[48px]"
              >
                <path
                  d="M23.8306 39.7143C32.6041 39.7143 39.7163 32.6021 39.7163 23.8286C39.7163 15.0551 32.6041 7.94286 23.8306 7.94286C15.0571 7.94286 7.94482 15.0551 7.94482 23.8286C7.94482 32.6021 15.0571 39.7143 23.8306 39.7143ZM23.8306 43.6857C12.8637 43.6857 3.97339 34.7953 3.97339 23.8286C3.97339 12.8618 12.8637 3.97144 23.8306 3.97144C34.7973 3.97144 43.6877 12.8618 43.6877 23.8286C43.6877 34.7953 34.7973 43.6857 23.8306 43.6857ZM17.6553 26.1535L12.6948 24.6052C11.6227 24.2764 11.6164 23.5387 12.9349 23.0087L32.2619 15.5433C33.3828 15.0844 34.0203 15.6642 33.6569 17.1097L30.365 32.6406C30.1358 33.7454 29.4694 34.0085 28.5464 33.4986L23.4811 29.7506L21.1203 32.029C20.8776 32.2631 20.6802 32.4643 20.3085 32.5147C19.9366 32.5649 19.6301 32.4549 19.4071 31.8384L17.6804 26.1376L17.6553 26.1535Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="text-[white] hover:text-[#FFC905] w-[30px] h-[30px] md:text-[40px] md:h-[40px] xl:w-[45px] xl:h-[45px] 2xl:w-[48px] 2xl:h-[48px]"
              >
                <path
                  d="M16.2286 3.97144H2.32861L18.7323 25.8431L3.22209 43.6855H8.48429L21.1697 29.0927L32.1143 43.6857H46.0143L28.9207 20.8943L43.6317 3.97144H38.3695L26.4834 17.6446L16.2286 3.97144ZM34.1 39.7143L10.2715 7.94286H14.2429L38.0715 39.7143H34.1Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="homepage-container px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] py-[15px] mx-auto">
        <p className="copyright text-[13px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[16px]">
          VISTAS 2023 - @ COPYRIGHT RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
