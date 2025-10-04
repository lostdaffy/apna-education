import React from "react";

const Partner = () => {
  const partners = [
    { name: "/images/New-Project.png" },
    { name: "/images/New-Project-1.png" },
    { name: "/images/New-Project-2.png" },
    { name: "/images/New-Project-3.png" },
    { name: "/images/New-Project-4.png" },
    { name: "/images/New-Project-5.png" },
  ];

  return (
    <section className="py-16 sm:py-20 min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-[#1e73be]">Partner Institutions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto">
            World-renowned universities and medical colleges we partner with
          </p>
          <div className="w-16 sm:w-20 h-1 bg-[#1e73be] mx-auto mt-6 rounded"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="border border-gray-400 flex items-center justify-center py-6 sm:py-8 bg-white/30 backdrop-blur-md rounded-lg"
            >
              <img
                src={partner.name}
                alt={`Partner ${index + 1}`}
                className="max-h-16 sm:max-h-20 md:max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
