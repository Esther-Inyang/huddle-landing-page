import { useState } from "react";
import footerBgDesktop from "../assets/bg-footer-top-desktop.svg";
import logo from "../assets/logo.svg";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import footerBgMobile from "../assets/bg-footer-top-mobile.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailError("");
    } else if (!validateEmail(value)) {
      setEmailError("Check your email please");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Check your email please");
      return;
    }
    setEmailError("");
    console.log("Submitting:", email);
  };

  return (
    <div className="w-full pb-10 bg-[#00252e] relative">
      <img
        src={footerBgDesktop}
        alt="Footer Background"
        className="hidden md:block w-full h-[120px] bg-white"
      />
      <img
        src={footerBgMobile}
        alt="Footer Background"
        className="block md:hidden w-full h-[120px] bg-white"
      />
      <div className="w-[80%] mx-auto lg:mt-10 lg:pt-10 pb-10 flex flex-col lg:flex-row lg:justify-between">
        <div className="order-2 lg:order-1 mt-10 lg:mt-0 lg:basis-[35%]">
          <img
            src={logo}
            alt="Logo"
            className="w-28 md:w-30 filter brightness-0 invert"
          />
          <div className="text-white mt-4 opacity-80">
            <p className="mt-4 text-xs xl:text-base leading-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
          </div>
          <div>
            <div>
              <p className="text-white text-xs xl:text-base mt-4 opacity-80">
                <MdPhoneInTalk className="inline-block mr-2" />
                Phone: +1 543-123-4567
              </p>
            </div>
            <div>
              <p className="mt-2 opacity-80 text-white text-xs xl:text-base">
                <HiOutlineMail className="inline-block mr-2" />
                example@huddle.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 mt-4 lg:mt-10 opacity-85">
            <a
              href="#"
              className="p-1 text-[#00252e] bg-white rounded-sm transition-all duration-150 ease-linear hover:bg-cyan-400"
            >
              <FaFacebookF className="text-sm xl:text-base" />
            </a>
            <a
              href="#"
              className="p-1 text-[#00252e] bg-white rounded-sm transition-all duration-150 ease-linear hover:bg-cyan-400"
            >
              <GrInstagram className="text-sm xl:text-base" />
            </a>
            <a
              href="#"
              className="p-1 text-[#00252e] bg-white rounded-sm transition-all duration-150 ease-linear hover:bg-cyan-400"
            >
              <FaTwitter className="text-sm xl:text-base" />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:basis-[40%]">
          <div className="w-[95%]">
            <h2 className="text-white text-xl lg:text-2xl font-medium opacity-90 tracking-wider">
              Newsletter
            </h2>
            <div className="mt-4 text-white text-xs xl:text-base font-normal opacity-80 leading-5">
              <p>
                To receive tips on how to grow your community sign up to our
                weekly newsletter. We'll never send you spam or pass on your
                email address
              </p>
            </div>
          </div>
          <div className="mt-10">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col lg:flex-row gap-5"
            >
              <div className="basis-[60%]">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full py-2 px-4 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 border ${
                    emailError ? "border-[#ff4242]" : "border-gray-300"
                  }`}
                />
                {emailError && (
                  <p className="text-[#ff4242] text-xs xl:text-sm mt-1">
                    {emailError}
                  </p>
                )}
              </div>
              <div className="w-full flex justify-end lg:block lg:basis-[28%]">
                <button
                  type="submit"
                  className="lg:w-full py-2 md:py-2.5 border border-[#ff52bf] bg-[#ff52bf] text-xs xl:text-base text-white px-6 lg:px-4 font-bold rounded-md transition-all duration-200 ease-linear hover:bg-[#ff8fd8] hover:border-[#ff8fd8]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
