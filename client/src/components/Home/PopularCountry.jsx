import React from "react";

const PopularCountry = () => {
  const destinations = [
    { name: "United Kingdom", flag: "/images/United-Kingdom.png" },
    { name: "Australia", flag: "/images/Australia.png" },
    { name: "United States", flag: "/images/usa.webp" },
    { name: "India", flag: "/images/india.png" },
    { name: "China", flag: "/images/china.jpeg" },
    { name: "England", flag: "/images/england.png" },
    { name: "Japan", flag: "/images/japan.png" },
    { name: "Spain", flag: "/images/spain.png" },
    { name: "Singapore", flag: "/images/singapore.png" },
    { name: "Nepal", flag: "/images/nepal.jpeg" },
    { name: "Thailand", flag: "/images/thailand.png" },
    { name: "Russia", flag: "/images/russia.png" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Popular <span className="text-[#1e73be]">Destinations</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#1e73be] mx-auto"></div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="">
              <div className="flex items-center p-4 sm:p-6 space-x-4">
                {/* Flag */}
                <div className="flex-shrink-0">
                  <img
                    src={destination.flag}
                    alt={destination.name}
                    className="w-16 sm:w-20 h-auto object-contain"
                  />
                </div>

                {/* Country Name */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCountry;
