import React from "react";

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <button
          className="absolute top-0 right-0 p-2 text-white bg-gray-700 rounded-full hover:bg-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={image}
          alt="Lightbox"
          className="max-w-full max-h-screen rounded-lg"
        />
      </div>
    </div>
  );
};

export default Lightbox;
