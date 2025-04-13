import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const StickyWhatsapp = () => {
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);
  const whatsappRef = useRef<HTMLDivElement>(null);

  // Function to handle WhatsApp link click
  const handleWhatsAppClick = (link: string) => {
    setShowWhatsAppOptions(false); // Close the popup
    window.open(link, "_blank"); // Open WhatsApp in new tab
  };

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: any) {
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
    <div>
      {" "}
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-24 right-6 z-[99]" ref={whatsappRef}>
        {/* WhatsApp Icon */}
        <div
          onClick={() => setShowWhatsAppOptions(!showWhatsAppOptions)}
          className="cursor-pointer text-green-500 w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <IoLogoWhatsapp className="w-12 h-12   " />
        </div>

        {/* WhatsApp Country Options */}
        {showWhatsAppOptions && (
          <div className="absolute w-28 bottom-16 right-0 bg-white shadow-md rounded-lg p-3 z-[999]">
            {/* India */}
            <div
              onClick={() => handleWhatsAppClick("https://wa.me/919207951000")}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all"
            >
              <img src="/flag/india.png" className="w-5 h-5" alt="India" />
              <span className="text-gray-800">India</span>
            </div>

            {/* UAE */}
            <div
              onClick={() => handleWhatsAppClick("https://wa.me/971552968786")}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all"
            >
              <img src="/flag/uae.png" className="w-5 h-5" alt="UAE" />
              <span className="text-gray-800">UAE</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickyWhatsapp;
