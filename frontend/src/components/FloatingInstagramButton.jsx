import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const FloatingInstagramButton = () => {
  return (
    <a
      href="https://www.instagram.com/potlibags_and_blouse_trendy/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-[100px]  lg:bottom-8 lg:right-[8%] z-20 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
    >
      <FaInstagram size={28} />
    </a>
  );
};

export default FloatingInstagramButton;
