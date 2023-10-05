import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 100) {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("shrink");
        }
      } else {
        const header = document.querySelector("header");
        if (header) {
          header.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <header
        className={`w-full text-white px-[15px] md:px-[40px] lg:px-[40px] xl:px-[50px] 2xl:px-[60px] mx-auto border-b border-light-gray ${
          navbar ? "mobile-header" : ""
        }`}
      >
        <div className="mx-auto flex flex-col lg:flex-row justify-between homepage-container">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-[30px] 2xl:gap-x-[50px]">
            <div className="w-full flex flex-row justify-between items-center gap-x-4">
              <div>
                <a href="/">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[90px] h-auto md:w-[100px] lg:w-[110px] lg:h-auto xl:w-[120px] 2xl:w-[130px] xl:h-auto"
                  />
                </a>
              </div>
              <div className="block lg:hidden">
                <button
                  className="pt-2 rounded-md outline-none focus:none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-6 toggler text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-6 toggler text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className={`flex justify-center items-center pb-6 lg:pb-0 lg:block ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col justify-center items-center h-[80vh] lg:h-[100%]">
                  {/* <ul className="flex flex-col lg:flex-row justify-center items-center gap-y-6 gap-x-4 lg:gap-x-2 xl:gap-x-4 2xl:gap-x-6 text-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[15px]">
                    <li>
                      <div className="btn-test from-bottom font-normal">
                        <a href="#features">feature</a>
                      </div>
                    </li>
                    <li>
                      <div className="btn-test from-bottom font-normal whitespace-nowrap">
                        <a href="#working">working</a>
                      </div>
                    </li>
                    <li>
                      <div className="btn-test from-bottom font-normal">
                        <a href="#testimonial">testimonials</a>
                      </div>
                    </li>
                    <li className="block lg:hidden flex flex-col gap-y-8">
                      {isLoggedIn ? (
                        <>
                          <Link to="/login">
                            <button>Dashbaord</button>
                          </Link>
                          <Link to="/signup">
                            <button>Player Tab</button>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to="/home/dashboard">
                            <button className="get-started-btn middle-out text-black hover:text-black transition duration-700 ease-in-out delay-100">
                              Get Started
                            </button>
                          </Link>
                        </>
                      )}
                    </li>

                  </ul> */}
                  <div className="block lg:hidden">
                    {isLoggedIn ? (
                      <div className="flex flex-col lg:flex-row items-center gap-[30px]">
                        <Link to="/login">
                          <button className="text-white hover:text-[#FFC905] transition duration-400 ease-in-out delay-50 text-[14px] md:text-[15px] 2xl:text-[16px]">
                            Dashbaord
                          </button>
                        </Link>
                        <Link to="/signup">
                          <button className="text-white hover:text-[#FFC905] transition duration-400 ease-in-out delay-50 text-[14px] md:text-[15px] 2xl:text-[16px]">
                            Player Tab
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <>
                        <Link to="/home/dashboard">
                          <button className="get-started-btn get-started-btn-custom middle-out text-black hover:text-black transition duration-700 ease-in-out delay-100 text-[14px] md:text-[15px] 2xl:text-[16px]">
                            Get Started
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:flex lg:flex-row items-center justify-center gap-x-3 xl:gap-x-4">
            {isLoggedIn ? (
              <div className="flex flex-col lg:flex-row items-center gap-[30px]">
                <Link to="/login">
                  <button className="text-white hover:text-[#FFC905] transition duration-400 ease-in-out delay-50 text-[14px] md:text-[15px] 2xl:text-[16px]">
                    Dashbaord
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="text-white hover:text-[#FFC905] transition duration-400 ease-in-out delay-50 text-[14px] md:text-[15px] 2xl:text-[16px]">
                    Player Tab
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/home/dashboard">
                  <button className="get-started-btn get-started-btn-custom middle-out text-black hover:text-black transition duration-700 ease-in-out delay-100 text-[14px] md:text-[15px] 2xl:text-[16px]">
                    Get Started
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
