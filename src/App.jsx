import Navbar from "./components/NavBar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Pricing from "./components/Pricing";
import Global from "./components/Global";
import Card2 from "./components/Card2";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <HeroSection />
      <Pricing />
      <Global />
      <Card2 />
      <Testimonial />
    </>
  );
}

export default App;
