import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   useEffect(() => {
     if (isOpen) {
       document.body.classList.add("overflow-hidden");
     } else {
       document.body.classList.remove("overflow-hidden");
     }
   }, [isOpen]);

  const path = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-20 bg-white ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo/logo.png" className=" h-20" alt="logo-image" />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes size={24}  />
          ) : (
            <FaBars size={24} />
          )}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-12">
          {path.map((item, i) => (
            <Link key={i} to={item.path}>
              <li
                className={`  contentFont ${
                  item.path === window.location.pathname
                    ? "text-blue-700"
                    : "text-gray-900"
                } hover:text-blue-700 font-medium`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed top-0 h-screen left-0 right-0 bg-gray-300 z-[99999] shadow-md">
            <button
              className="absolute top-4 right-8 text-gray-900"
              onClick={toggleMenu}
            >
              <FaTimes size={28} />
            </button>
            <ul className="flex flex-col p-4 mt-10 space-y-3">
              {path.map((item, i) => (
                <Link key={i} to={item.path}>
                  <li onClick={toggleMenu}
                    className={`  contentFont ${
                      item.path === window.location.pathname
                        ? "text-blue-700"
                        : "text-gray-900"
                    } hover:text-blue-700 text-lg  font-medium`}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
