import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SafeOption from "./components/blog/SafeOption";
import Franchisable from "./components/blog/Franchisable";
import { IoLogoWhatsapp } from "react-icons/io";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });

    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safeOption" element={<SafeOption />} />
        <Route path="/franchisable" element={<Franchisable />} />
      </Routes>
      <div className="fixed bottom-4 right-4 cursor-pointer  z-[99] text-green-500 w-16 h-16">
        {/* <a
          href="https://wa.me/15551234567" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        > */}
          <IoLogoWhatsapp className="w-full h-full " />
        {/* </a> */}
      </div>
      <Footer />
    </>
  );
};

export default App;
