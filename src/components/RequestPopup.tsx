import type React from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-md"
        // onClick={onClose}
      />
      <IoIosCloseCircle
        onClick={onClose}
        className="fixed top-4 right-4 z-[99]  cursor-pointer text-3xl"
      />

      {/* Popup content */}
      <div className="z-10 flex flex-col md:flex-row gap-6 max-w-4xl px-4">
        {/* WhatsApp Box */}
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-green-500 shadow-lg">
          <div className="w-24 h-24 mb-4">
            <img src="/contact/whatsapp.png" className="w-32 " alt="" />
          </div>
          <h3 className="text-gray-800 font-medium mb-2">
            Connect with us to explore tailored
          </h3>
          <p className="text-gray-700 mb-6">
            franchise opportunities and get your queries addressed
          </p>
          <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white py-2 px-6 rounded-md transition-colors w-full max-w-xs">
            WhatsApp
          </button>
        </div>

        {/* Email Box */}
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-blue-600 shadow-lg">
          <div className="w-24 h-24 mb-4">
            <img src="/contact/email.png" className="w-32 " alt="" />
          </div>
          <h3 className="text-gray-800 font-medium mb-2">
            Contact us via email to explore exclusive
          </h3>
          <p className="text-gray-700 mb-6">
            franchise opportunities and share your inquiries with our team
          </p>
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors w-full max-w-xs">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
