import mockup from "../assets/screen-mockups.svg";
import communities from "../assets/icon-communities.svg";
import message from "../assets/icon-messages.svg";
import section1BgTopDesktop from "../assets/bg-section-top-desktop-1.svg";
import section1BgBottomDesktop from "../assets/bg-section-bottom-desktop-1.svg";
import growIllustration from "../assets/illustration-grow-together.svg";
import section2BgTopDesktop from "../assets/bg-section-top-desktop-2.svg";
import section2BgBottomDesktop from "../assets/bg-section-bottom-desktop-2.svg";
import conversationIllustration from "../assets/illustration-flowing-conversation.svg";
import usersIllustration from "../assets/illustration-your-users.svg";

const Content = () => {
  return (
    <div className="my-20">
      <div className="w-[80%] mx-auto">
        <img src={mockup} alt="logo" className="" />
      </div>
      <div className="w-[80%] mx-auto mt-16 flex justify-between">
        <div className="flex flex-col gap-1 justify-center items-center">
          <div>
            <img src={communities} alt="logo" className="w-6" />
            <p className="text-5xl text-[#00252e] font-bold">1.4k+</p>
          </div>
          <p className="text-xs text-[#00252e] font-normal opacity-50">
            Communities Formed
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div>
            <img src={message} alt="logo" className="w-6" />
            <p className="text-5xl text-[#00252e] font-bold">2.7m+</p>
          </div>
          <p className="text-xs text-[#00252e] font-normal opacity-50">
            Message sent
          </p>
        </div>
      </div>

      <div className="w-full mt-16 bg-[#f5faff]">
        <img
          src={section1BgTopDesktop}
          alt="Background image"
          className="w-full h-[120px] bg-white"
        />
        <div className="flex justify-between mt-10 px-20 bg-[#f5faff]">
          <div>
            <h1 className="text-2xl text-[#00252e] font-bold">Grow Together</h1>
            <div className="mt-5 flex flex-col gap-1 text-base text-[#00252e] font-normal opacity-90">
              <p>
                Generate meaningful discussions with your audience and build a
              </p>
              <p>
                strong, loyal community. Think of the insightful conversations
                you
              </p>
              <p>miss out on with a feedback form</p>
            </div>
          </div>
          <div>
            <img
              src={growIllustration}
              alt="Illustration"
              className="w-[300px]"
            />
          </div>
        </div>
        <img
          src={section1BgBottomDesktop}
          alt="Background image"
          className="w-full h-[120px] bg-white"
        />
      </div>

      <div className="flex items-center justify-between my-20 px-20">
        <div>
          <img
            src={conversationIllustration}
            alt="Illustration"
            className="w-[300px]"
          />
        </div>
        <div>
          <h1 className="text-2xl text-[#00252e] font-bold">
            Flowing Conversations
          </h1>
          <div className="mt-5 flex flex-col gap-1 text-base text-[#00252e] font-normal opacity-90">
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online?
            </p>
            <p>
              Our threads have just-in-time loading for a more natural flow.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 bg-[#f5faff]">
        <img
          src={section2BgTopDesktop}
          alt="Background image"
          className="w-full h-[120px] bg-white"
        />
        <div className="flex justify-between mt-10 px-20 bg-[#f5faff]">
          <div>
            <h1 className="text-2xl text-[#00252e] font-bold">Your Users</h1>
            <div className="mt-5 flex flex-col gap-1 text-base text-[#00252e] font-normal opacity-90">
              <p>It takes no time at all to integrate Huddle with your app's</p>
              <p>
                authentication solution. This means, once signed in to your app,
                your
              </p>
              <p>users can start chatting immediately.</p>
            </div>
          </div>
          <div>
            <img
              src={usersIllustration}
              alt="Illustration"
              className="w-[300px]"
            />
          </div>
        </div>
        <img
          src={section2BgBottomDesktop}
          alt="Background image"
          className="w-full h-[120px] bg-white"
        />
      </div>

      <div className="w-[80%] mx-auto mt-28 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-[#00252e] font-bold">
          Ready To Build Your Community?
        </h1>
        <button className="mt-5 py-2 px-20 bg-[#ff52bf] border text-white font-medium rounded-full">
          Try it free
        </button>
      </div>
    </div>
  );
};

export default Content;
