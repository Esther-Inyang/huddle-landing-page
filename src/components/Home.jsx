import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-full min-h-full">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
