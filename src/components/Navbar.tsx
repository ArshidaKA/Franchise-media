import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src="/logo/logo.png" className=" h-20" alt="logo-image" />

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-12">
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 font-medium"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 font-medium"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-700 font-medium"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 shadow-md">
            <ul className="flex flex-col p-4">
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 font-medium"
                >
                  Home
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 font-medium"
                >
                  About
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 font-medium"
                >
                  Service
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 font-medium"
                >
                  Blog
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
