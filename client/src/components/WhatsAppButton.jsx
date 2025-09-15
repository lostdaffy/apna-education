


import React from "react";

const WhatsAppButton = () => {
  return (
    <>
      {/* Custom CSS for animation */}
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
          .animate-zoomInOut {
            animation: zoomInOut 2s infinite ease-in-out;
          }
        `}
      </style>

      <a
        href="https://wa.me/919667601325"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6
                   transition duration-300 ease-in-out z-50 animate-zoomInOut"
      >
        <i className="ri-whatsapp-line text-2xl md:text-4xl text-green-600 bg-black rounded-full p-2"></i>
      </a>
    </>
  );
};

export default WhatsAppButton;
