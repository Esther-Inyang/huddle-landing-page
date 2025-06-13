import footerBgDesktop from "../assets/bg-footer-top-desktop.svg";
import logo from "../assets/logo.svg";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import footerBgMobile from "../assets/bg-footer-top-mobile.svg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
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
        <div className="order-2 lg:order-1 mt-10 lg:mt-0 lg:basis-[30%]">
          <img
            src={logo}
            alt="Logo"
            className="w-28 md:w-32 filter brightness-0 invert"
          />
          <div className="text-white mt-4 opacity-80">
            <p className="mt-4 text-sm lg:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
          </div>
          <div>
            <div>
              <p className="text-white mt-4 text-sm opacity-80">
                <MdPhoneInTalk className="inline-block mr-2 text-white text-base" />
                Phone: +1 543-123-4567
              </p>
            </div>
            <div>
              <p className="text-white mt-2 lg:mt-4 text-sm opacity-80">
                <HiOutlineMail className="inline-block mr-2 text-white text-base" />
                example@huddle.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 mt-4 lg:mt-10 opacity-85">
            <a href="#" className="text-white text-xl lg:text-3xl">
              <RiFacebookBoxFill />
            </a>
            <a href="#" className="text-white text-lg lg:text-2xl">
              <SiInstagram />
            </a>
            <a href="#" className="text-white text-xl lg:text-3xl">
              <AiFillTwitterSquare />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:basis-[40%]">
          <h2 className="text-white text-2xl font-medium opacity-90">
            Newsletter
          </h2>
          <div className="mt-4 text-white text-sm lg:text-base font-normal opacity-80">
            <p>
              To receive tips on how to grow your community sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address
            </p>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row gap-5">
            <input
              type="email"
              placeholder=""
              className="w-full py-2 px-4 rounded-md bg-white text-sm"
            />
            <div className="w-full flex justify-end lg:block">
              <button className="bg-[#ff52bf] text-sm lg:text-base text-white px-6 lg:px-4 py-1 lg:py-2 font-medium rounded-md transition-all duration-200 ease-linear hover:bg-[#ff8fd8]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
