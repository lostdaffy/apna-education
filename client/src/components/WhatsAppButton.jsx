const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919667601325" // apna WhatsApp number add karein
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-2 rounded-full 
                  transition duration-300 ease-in-out z-50"
    >
      <i className="ri-whatsapp-line text-5xl text-white"></i>
    </a>
  );
};

export default WhatsAppButton;
