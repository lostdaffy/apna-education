const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919667601325" // apna WhatsApp number add karein
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 
        bg-green-600 text-white 
        p-3 sm:p-4 
        rounded-full 
        transition duration-300 ease-in-out 
        z-50
        shadow-lg
        hover:scale-110
      "
    >
      <i className="ri-whatsapp-line text-3xl sm:text-5xl text-white"></i>
    </a>
  );
};

export default WhatsAppButton;
