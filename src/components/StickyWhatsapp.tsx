import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const StickyWhatsapp = () => {
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);
  const whatsappRef = useRef<HTMLDivElement>(null);

  // Common welcome message
  const welcomeMessage = encodeURIComponent(
    "Hello 👋 I'm interested in your services. Please share more details."
  );

  // Function to handle WhatsApp link click
  const handleWhatsAppClick = (number: string) => {
  setShowWhatsAppOptions(false); // Close the popup
  window.open(
    `https://api.whatsapp.com/send?phone=${number}&text=${welcomeMessage}`,
    "_blank"
  );
};

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (whatsappRef.current && !whatsappRef.current.contains(event.target)) {
        setShowWhatsAppOptions(false);
      }
    }

    if (showWhatsAppOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWhatsAppOptions]);

  return (
    <div>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-24 right-6 z-[99]" ref={whatsappRef}>
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
              onClick={() => handleWhatsAppClick("919207887722")}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all"
            >
              <img src="/flag/india.png" className="w-5 h-5" alt="India" />
              <span className="text-gray-800">India</span>
            </div>

            {/* UAE */}
            <div
              onClick={() => handleWhatsAppClick("971585587792")}
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
