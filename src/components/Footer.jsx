import footerBg from "../assets/bg-footer-top-desktop.svg";
import logo from "../assets/logo.svg";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillTwitterSquare } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full bg-[#00252e] relative">
      <img
        src={footerBg}
        alt="Footer Background"
        className="w-full h-[120px] bg-white"
      />
      <div className="w-[80%] mx-auto mt-10 pb-10 flex justify-between">
        <div className="text-sm">
          <img
            src={logo}
            alt="Logo"
            className="w-32 filter brightness-0 invert"
          />
          <div className="text-white mt-4 opacity-80">
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit, amet consectetur
            </p>
            <p>adipisicing elit. Mauris nulla quam, hendrerit</p>
            <p>lacinia vestibulum a, ultrices quis sem.</p>
          </div>
          <div>
            <div>
              <p className="text-white mt-4 text-sm opacity-80">
                <MdPhoneInTalk className="inline-block mr-2 text-white text-base" />
                Phone: +1 543-123-4567
              </p>
            </div>
            <div>
              <p className="text-white mt-4 text-sm opacity-80">
                <HiOutlineMail className="inline-block mr-2 text-white text-base" />
                example@huddle.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 opacity-85">
            <a href="#" className="text-white text-3xl">
              <RiFacebookBoxFill />
            </a>
            <a href="#" className="text-white text-2xl">
              <SiInstagram />
            </a>
            <a href="#" className="text-white text-3xl">
              <AiFillTwitterSquare />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl font-medium opacity-90">
            Newsletter
          </h2>
          <div className="mt-4 text-white text-sm font-normal opacity-80">
            <p>To receive tips on how to grow your community</p>
            <p>sign up to our weekly newsletter. We'll never send</p>
            <p>you spam or pass on your email address</p>
          </div>
          <div className="mt-10 flex gap-5">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full py-2 px-4 rounded-md bg-white text-sm"
            />
            <button className="bg-[#ff52bf] text-sm text-white px-4 py-1  font-medium rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
