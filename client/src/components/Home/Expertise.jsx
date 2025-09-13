import React from "react";

const Expertise = () => {
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
    <>
      {/* Expertise Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
              Our <span className="text-[#4ccedc]">Expertise</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
              Empowering students with comprehensive guidance for their medical
              education journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-snug sm:leading-tight">
                Your Trusted Partner in <br />
                <span className="text-[#4ccedc]">Medical Education</span>
              </h3>

              <div className="mb-6">
                <p className="text-sm sm:text-base md:text-lg mb-4 text-gray-800 leading-relaxed">
                  With years of experience in guiding students for MBBS
                  programs, we have developed unmatched expertise in counseling,
                  admissions, and international education pathways.
                </p>
                <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-800 leading-relaxed">
                  Our dedicated team ensures smooth application processes, visa
                  support, and continuous mentoring to help you achieve your
                  dream of becoming a doctor.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertisePoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className={`${point.icon} text-[#4ccedc] text-xl sm:text-2xl`}></i>
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                      {point.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full mt-8 lg:mt-0">
              <img
                src="/images/expert-1.jpg"
                className="w-full h-auto rounded-2xl object-cover"
                alt="Expert Guidance"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
