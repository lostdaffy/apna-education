import React from "react";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";

const Countries = () => {
  const countries = [
    {
      name: "Russia",
      image: "/images/russia.jpg",
      description: "Affordable MBBS programs with WHO recognized degrees.",
    },
    {
      name: "Ukraine",
      image: "/images/ukraine.jpg",
      description: "Quality medical education with modern infrastructure.",
    },
    {
      name: "Georgia",
      image: "/images/georgia.jpg",
      description: "English medium courses with European standards.",
    },
    {
      name: "Philippines",
      image: "/images/philippines.jpg",
      description: "US curriculum with hands-on clinical experience.",
    },
    {
      name: "Kazakhstan",
      image: "/images/kazakhstan.jpg",
      description: "Affordable fees with quality medical education.",
    },
    {
      name: "China",
      image: "/images/china.jpg",
      description: "Advanced medical facilities with research opportunities.",
    },
    {
      name: "Bangladesh",
      image: "/images/bangladesh.jpg",
      description: "Nearby destination with familiar culture and language.",
    },
    {
      name: "India",
      image: "/images/india.jpg",
      description: "Top government and private medical colleges.",
    },
  ];

  const expertisePoints = [
    {
      icon: "ri-graduation-cap-line",
      title: "Admission Guidance",
      description:
        "Expert counseling for university selection and application process",
    },
    {
      icon: "ri-passport-line",
      title: "Visa & Travel Support",
      description: "Complete visa processing and travel arrangement assistance",
    },
    {
      icon: "ri-award-line",
      title: "Scholarship Assistance",
      description: "Help securing financial aid and merit-based scholarships",
    },
    {
      icon: "ri-customer-service-2-line",
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for all your queries and concerns",
    },
  ];

  return (
    <div>
      <HeroSection title="Study" highlight="Destinations" />
      {/* Countries Section */}
      <section
        className="py-20 min-h-screen flex items-center bg-[#242424]"
        id="countries"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Popular <span className="text-gray-300">MBBS Destinations</span>
            </h2>
            <p className="text-lg text-gray-300">
              Explore top countries offering world-class medical education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40  group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="font-bold text-xl mb-2">{country.name}</h4>
                    <p className="text-sm text-gray-200">
                      {country.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Expertise Section */}
      <section className="py-20 bg-gray-50" id="expertise">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
              Our <span className="text-gray-600">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Empowering students with comprehensive guidance for their medical
              education journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#242424]">
                Your Trusted Partner in{" "}
                <span className="text-gray-600">Medical Education</span>
              </h3>

              <div className="mb-6">
                <p className="text-lg mb-4 text-gray-600 leading-relaxed">
                  With years of experience in guiding students for MBBS
                  programs, we have developed unmatched expertise in counseling,
                  admissions, and international education pathways.
                </p>
                <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                  Our dedicated team ensures smooth application processes, visa
                  support, and continuous mentoring to help you achieve your
                  dream of becoming a doctor.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-[#242424] mb-1">
                    500+
                  </h4>
                  <small className="text-gray-600">Students Guided</small>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-[#242424] mb-1">
                    50+
                  </h4>
                  <small className="text-gray-600">Partner Universities</small>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-[#242424] mb-1">
                    98%
                  </h4>
                  <small className="text-gray-600">Success Rate</small>
                </div>
              </div>
            </div>

            {/* Right Side - Expertise Points */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertisePoints.map((point, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <i
                        className={`${point.icon} text-[#242424] text-3xl`}
                      ></i>
                    </div>
                    <h5 className="font-semibold mb-2 text-[#242424]">
                      {point.title}
                    </h5>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
};

export default Countries;
