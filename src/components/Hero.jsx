const Hero = () => {
  return (
    <div className="w-[85%] md:w-[90%] h-[80vh] flex flex-col justify-center mx-auto">
      <div>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#00252e] font-extrabold">
          Build The Community Your Fans Will Love
        </h1>
        <div className="w-[85%] md:w-[70%] lg:w-[50%] xl:w-[60%] mx-auto mt-5 lg:mt-10 text-center text-sm md:text-base xl:text-lg 2xl:text-xl text-[#00252e] font-normal opacity-90">
          <p className="leading-relaxed">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create the connections with your users as
            you engage in genuine discussion.
          </p>
        </div>
        <div className="mt-8 md:mt-10 flex justify-center">
          <button className="py-3 px-10 lg:px-14 text-sm xl:text-base lg:py-4 xl:px-20 bg-[#ff52bf] border text-white font-bold rounded-full transition-all duration-200 ease-linear hover:bg-[#ff8fd8]">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
