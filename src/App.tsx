import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import SafeOption from "./components/blog/SafeOption";
import Franchisable from "./components/blog/Franchisable";

const App = () => {
  const { pathname } = useLocation();
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);
   const whatsappRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ once: true, mirror: false });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Function to handle WhatsApp link click
  const handleWhatsAppClick = (link: string) => {
    setShowWhatsAppOptions(false); // Close the popup
    window.open(link, "_blank"); // Open WhatsApp in new tab
  };

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event:any) {
      if (whatsappRef.current && !whatsappRef.current.contains(event.target)) {
        setShowWhatsAppOptions(false);
      }
    }

    // Add event listener when popup is open
    if (showWhatsAppOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWhatsAppOptions]);

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

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-[99]" ref={whatsappRef}>
        {/* WhatsApp Icon */}
        <div
          onClick={() => setShowWhatsAppOptions(!showWhatsAppOptions)}
          className="cursor-pointer text-green-500 w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <IoLogoWhatsapp className="w-12 h-12" />
        </div>

        {/* WhatsApp Country Options */}
        {showWhatsAppOptions && (
          <div className="absolute w-28 bottom-16 right-0 bg-white shadow-md rounded-lg p-3 z-[999]">
            {/* India */}
            <div
              onClick={() => handleWhatsAppClick("https://wa.me/919207887722")}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all"
            >
              <img src="/flag/india.png" className="w-5 h-5" alt="India" />
              <span className="text-gray-800">India</span>
            </div>

            {/* UAE */}
            <div
              onClick={() => handleWhatsAppClick("https://wa.me/971585587792")}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all"
            >
              <img src="/flag/uae.png" className="w-5 h-5" alt="UAE" />
              <span className="text-gray-800">UAE</span>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default App;
