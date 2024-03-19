import Navbar from "./components/NavBar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Card from "./components/Card";
import Pricing from "./components/Pricing";
import Global from "./components/Global";
import Card2 from "./components/Card2";
import Testimonial from "./components/Testimonial";
import sponsoredImg from "./assets/Sponsored.svg";
import Footer from "./components/Footer";

function App() {
  const data = {
    imgurl: sponsoredImg,
    subscribe: {
      title: "Subscribe Now for Get Special Features!",
      subTitle: "Let's subscribe with us and find the fun.",
    },
  };
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <FeatureSection />
      <Pricing />
      <Global />
      <Card2 image={data.imgurl} subscribe="" />
      <Testimonial />
      <Card2 image="" subscribe={data.subscribe} />
      <Footer />
    </>
  );
}

export default App;
