import mockup from "../assets/screen-mockups.svg";
import communities from "../assets/icon-communities.svg";
import message from "../assets/icon-messages.svg";
import section1BgTopDesktop from "../assets/bg-section-top-desktop-1.svg";
import section1BgBottomDesktop from "../assets/bg-section-bottom-desktop-1.svg";
import section2BgTopDesktop from "../assets/bg-section-top-desktop-2.svg";
import section2BgBottomDesktop from "../assets/bg-section-bottom-desktop-2.svg";
import section1BgTopMobile from "../assets/bg-section-top-mobile-1.svg";
import section1BgBottomMobile from "../assets/bg-section-bottom-mobile-1.svg";
import section2BgTopMobile from "../assets/bg-section-top-mobile-2.svg";
import section2BgBottomMobile from "../assets/bg-section-bottom-mobile-2.svg";
import growIllustration from "../assets/illustration-grow-together.svg";
import conversationIllustration from "../assets/illustration-flowing-conversation.svg";
import usersIllustration from "../assets/illustration-your-users.svg";

const Content = () => {
  return (
    <div className="md:mb-20">
      <div className="w-[80%] mx-auto flex justify-center">
        <img src={mockup} alt="logo" />
      </div>
      <div className="w-[80%] mx-auto my-16 lg:my-32 flex flex-col gap-14 md:gap-0 md:flex-row md:justify-between">
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            <img src={communities} alt="logo" className="w-6 lg:w-10" />
            <p className="text-5xl lg:text-7xl text-[#00252e] font-bold">
              1.4k+
            </p>
          </div>
          <p className="mt-1 text-base text-[#00252e] font-normal opacity-50">
            Communities Formed
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div>
            <img src={message} alt="logo" className="w-6 lg:w-10" />
            <p className="text-5xl lg:text-7xl text-[#00252e] font-bold">
              2.7m+
            </p>
          </div>
          <p className="mt-1 text-base text-[#00252e] font-normal opacity-50">
            Message sent
          </p>
        </div>
      </div>
      <section className="w-full mt-10 md:mt-16 bg-[#f5faff]">
        <img
          src={section1BgTopDesktop}
          alt="Background image"
          className="hidden md:block w-full h-[120px] bg-white"
        />
        <img
          src={section1BgTopMobile}
          alt="Background image"
          className="block md:hidden w-full h-[120px] bg-white"
        />
        <div className="w-full py-16 lg:py-20 bg-[#f5faff]">
          <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-16 md:gap-0 items-center md:justify-between">
            <div className="w-[80%] mx-auto order-2 md:order-1 md:basis-[50%] lg:basis-[40%]">
              <h1 className="text-[28px] md:text-3xl lg:text-4xl  text-[#00252e] font-extrabold text-center md:text-left">
                Grow Together
              </h1>
              <div className="mt-5 lg:mt-6 text-center md:text-left text-base lg:text-lg text-[#00252e] font-normal opacity-90">
                <p>
                  Generate meaningful discussions with your audience and build a
                  strong, loyal community. Think of the insightful conversations
                  you miss out on with a feedback form.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 md:basis-[45%]">
              <img
                src={growIllustration}
                alt="Illustration"
                className="w-[300px] lg:w-[500px]"
              />
            </div>
          </div>
        </div>
        <img
          src={section1BgBottomDesktop}
          alt="Background image"
          className="hidden md:block w-full h-[120px] bg-white"
        />
        <img
          src={section1BgBottomMobile}
          alt="Background image"
          className="block md:hidden w-full h-[120px] bg-white"
        />
      </section>
      <section className="w-full mt-16">
        <div className="w-full py-16 lg:py-20">
          <div className="w-[80%] mx-auto">
            <div className="flex flex-col gap-10 lg:gap-0 md:flex-row justify-around items-center">
              <div className="md:basis-[50%] lg:basis-[45%]">
                <img
                  src={conversationIllustration}
                  alt="Illustration"
                  className="w-[300px] lg:w-[500px]"
                />
              </div>
              <div className="md:basis-[50%] lg:basis-[40%]">
                <h1 className="text-[28px] md:text-3xl lg:text-4xl text-center md:text-left text-[#00252e] font-bold">
                  Flowing Conversations
                </h1>
                <div className="mt-5 md:mt-3 lg:mt-5 text-base lg:text-lg text-center md:text-left text-[#00252e] font-normal opacity-90">
                  <p>
                    You wouldn't paginate a conversation in real life, so why do
                    it online? Our threads have just-in-time loading for a more
                    natural flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-16 bg-[#f5faff]">
        <img
          src={section2BgTopDesktop}
          alt="Background image"
          className="hidden md:block w-full h-[120px] bg-white"
        />
        <img
          src={section2BgTopMobile}
          alt="Background image"
          className="block md:hidden w-full h-[120px] bg-white"
        />
        <div className="w-full py-16 lg:py-20 bg-[#f5faff]">
          <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-16 md:gap-0 items-center md:justify-between">
            <div className="w-[90%] mx-auto order-2 md:order-1 md:basis-[50%] lg:basis-[40%]">
              <h1 className="text-[28px] md:text-3xl lg:text-4xl text-[#00252e] font-extrabold text-center md:text-left">
                Your Users
              </h1>
              <div className="mt-5 lg:mt-6 text-center md:text-left text-base lg:text-lg text-[#00252e] font-normal opacity-90">
                <p>
                  It takes no time at all to integrate Huddle with your app's
                  authentication solution. This means, once signed in to your
                  app, your users can start chatting immediately.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 md:basis-[45%]">
              <img
                src={usersIllustration}
                alt="Illustration"
                className="w-[300px] lg:w-[500px]"
              />
            </div>
          </div>
        </div>
        <img
          src={section2BgBottomDesktop}
          alt="Background image"
          className="hidden md:block w-full h-[120px] bg-white"
        />
        <img
          src={section2BgBottomMobile}
          alt="Background image"
          className="block md:hidden w-full h-[120px] bg-white"
        />
      </section>
      <div className="w-[80%] mx-auto mt-10 mb-20 lg:mb-34 md:mt-28 flex flex-col items-center justify-center">
        <h1 className="text-[28px] md:text-3xl lg:text-4xl  text-[#00252e] font-bold text-center">
          Ready To Build Your Community?
        </h1>
        <button className="mt-8 py-2 text-base lg:text-lg lg:py-4 px-10 md:px-20 bg-[#ff52bf] border text-white font-medium rounded-full transition-all duration-200 ease-linear hover:bg-[#ff8fd8]">
          Get Started For Free
        </button>
      </div>
    </div>
  );
};

export default Content;
