import type React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

   const path = [
     { name: "About us", path: "/about" },
     { name: "Service", path: "/service" },
     { name: "Blog", path: "/blog" },
   ];
     
  return (
    <footer className="bg-gradient-to-b from-[#2b3a8f] to-[#0c1129]  text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:w-64 w-full">
            <p className="mb-4 contentFont text-base">
              Our expert financial consultants provide solutions to help you
              achieve financial wealth. Trust us to guide you toward a brighter
              financial future.
            </p>
          </div>

          {/* Quick Links */}

          {/* Contact Details */}
          <div className="flex  gap-20">
            <div>
              <h3 className="font-bold text-lg lg:text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {path.map((item, i) => (
                  <Link key={i} to={item.path}>
                    <li className="contentFont">{item.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg lg:text-xl mb-4">
                Contact Details
              </h3>
              <p className="mb-2">Info@franchisemedia.in</p>
              <p className=" ">+919207887722</p>
              <p className=" ">+971585587792</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-6">
  {/* Social Links */}
  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
    <a
      href="https://www.facebook.com/franchisemedia/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 flex items-center transition duration-300"
    >
      <FaFacebook size={20} />
      <span className="ml-2 contentFont text-sm sm:text-base">Facebook</span>
    </a>

    <a
      href="https://www.linkedin.com/company/franchisemedia/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 flex items-center transition duration-300"
    >
      <FaLinkedin size={20} />
      <span className="ml-2 contentFont text-sm sm:text-base">LinkedIn</span>
    </a>

    <a
      href="https://www.instagram.com/franchise.media_/?igsh=MTA5YWk4d3Q0eXI4eg%3D%3D#"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-400 flex items-center transition duration-300"
    >
      <FaInstagram size={20} />
      <span className="ml-2 contentFont text-sm sm:text-base">Instagram</span>
    </a>

    <a
      href="https://www.youtube.com/@franchise_media"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-500 flex items-center transition duration-300"
    >
      <FaYoutube size={20} />
      <span className="ml-2 contentFont text-sm sm:text-base">YouTube</span>
    </a>
  </div>

  {/* Email Subscription */}
  <div className="flex flex-col sm:flex-row justify-center lg:justify-end w-full sm:w-auto gap-3">
    <input
      type="email"
      placeholder="Email address"
      className="py-3 px-4 contentFont text-sm bg-white rounded-md text-gray-800 w-full sm:w-72 focus:outline-none shadow-sm"
    />
    <button className="bg-green-500 cursor-pointer contentFont text-sm hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition duration-300 w-full sm:w-auto">
      Get Started
    </button>
  </div>
</div>


        <hr className="border-white my-8" />

        <div className="flex contentFont flex-col md:flex-row justify-between items-center">
          <p>Franchise Media © All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-blue-300 text-base lg:text-lg transition duration-300"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="hover:text-blue-300 text-base lg:text-lg transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
