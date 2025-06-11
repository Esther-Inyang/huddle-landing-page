import React from "react";

const Hero = () => {
  return (
    <div className="w-[80%] mt-10 mx-auto">
      <h1 className="text-center text-3xl text-[#00252e] font-bold">
        Build The Community Your Fans Will Love
      </h1>
      <div className="mt-10 flex flex-col items-center gap-1 justify-center text-base text-[#00252e] font-normal opacity-90">
        <p>Huddle re-imagines the way we build communities. You have a</p>
        <p>
          voice, but so does your audience. Create the connections with your
        </p>
        <p>users as you engage in genuine discussion</p>
      </div>
      <div className="mt-5 flex justify-center">
        <button className="mt-5 py-2 px-12 bg-[#ff52bf] border text-white font-medium rounded-full">
          Try it free
        </button>
      </div>
    </div>
  );
};

export default Hero;
