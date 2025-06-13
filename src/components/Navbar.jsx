import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="p-4 md:p-8 flex justify-between items-center">
      <img src={logo} alt="logo" className="w-24 md:w-32 lg:w-38" />
      <button className="py-1 px-4 lg:px-6 lg:py-2 text-xs md:text-sm lg:text-base text-[#ff52bf] border-1 border-[#ff52bf] rounded-full font-medium shadow-md transition-all duration-200 ease-linear hover:border-[#ff8fd8] hover:text-[#ff8fd8]">
        Try it free
      </button>
    </div>
  );
};

export default Navbar;
