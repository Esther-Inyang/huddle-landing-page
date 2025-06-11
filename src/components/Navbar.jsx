import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="p-8 flex justify-between items-center">
      <img src={logo} alt="logo" className="w-32 " />
      <button className="py-1 px-3 text-[#ff52bf] border border-[#ff52bf] rounded-full">
        Try it free
      </button>
    </div>
  );
};

export default Navbar;
