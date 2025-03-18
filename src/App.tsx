import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import SafeOption from "./components/blog/SafeOption";
import Franchisable from "./components/blog/Franchisable";
import StickyWhatsapp from "./components/StickyWhatsapp";
import "./App.css";

const App = () => {
  const { pathname } = useLocation();
  

  useEffect(() => {
    AOS.init({ once: true, mirror: false });
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
      <StickyWhatsapp />
      <Footer />
    </>
  );
};

export default App;
