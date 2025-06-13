const Hero = () => {
  return (
    <div className="w-[80%] h-[80vh] flex flex-col justify-center mx-auto">
      <div>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#00252e] font-extrabold">
          Build The Community Your Fans Will Love
        </h1>
        <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto mt-5 lg:mt-10 text-center text-sm md:text-base lg:text-lg text-[#00252e] font-normal opacity-90">
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create the connections with your users as
            you engage in genuine discussion.
          </p>
        </div>
        <div className="mt-8 md:mt-10 flex justify-center">
          <button className="py-2 text-base lg:text-lg lg:py-4 px-10 md:px-20 bg-[#ff52bf] border text-white font-medium rounded-full transition-all duration-200 ease-linear hover:bg-[#ff8fd8]">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
