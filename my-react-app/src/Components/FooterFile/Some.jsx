import React from "react";
import { FaYoutube, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

export const Some = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <a href="#" className="flex items-center mr-4 mb-2 sm:mb-0">
          <FaYoutube className="text-red-500 mr-2" />
          YouTube
        </a>
        <a href="#" className="flex items-center mr-4 mb-2 sm:mb-0">
          <FaInstagram className="text-pink-500 mr-2" />
          Instagram
        </a>
        <a href="#" className="flex items-center mr-4 mb-2 sm:mb-0">
          <FaWhatsapp className="text-green-500 mr-2" />
          WhatsApp
        </a>
        <a href="#" className="flex items-center">
          <FaPhone className="text-blue-500 mr-2" />
          Call Us
        </a>
      </div>
    </footer>
  );
};

export default Some;
