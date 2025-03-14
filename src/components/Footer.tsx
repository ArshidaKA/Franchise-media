import type React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2b3a8f] to-[#0c1129]  text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <p className="mb-4">
              Our expert financial consultants provide solutions to help you
              achieve financial wealth. Trust us to guide you toward a brighter
              financial future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition duration-300"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 transition duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Details</h3>
            <p className="mb-2">contact@infofin.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col ">
          <div className="flex space-x-4 mt-6">
            <div className="hover:text-blue-300 flex items-center transition duration-300">
              <FaFacebook size={20} /> <span className="ml-2">Facebook</span>
            </div>
            <div className="hover:text-blue-300 flex items-center transition duration-300">
              <FaTwitter size={20} /> <span className="ml-2">Twitter</span>
            </div>
            <div className="hover:text-blue-300 transition flex items-center duration-300">
              <FaInstagram size={20} /> <span className="ml-2">Instagram</span>
            </div>
          </div>
          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Email address"
              className="py-2 px-4 rounded-l-md bg-white text-gray-800 w-full focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-r-md transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        <hr className="border-blue-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>Franchise Media © All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-blue-300 transition duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
