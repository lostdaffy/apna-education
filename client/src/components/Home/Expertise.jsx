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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
              Our <span className="text-[#4ccedc]">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Empowering students with comprehensive guidance for their medical
              education journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-normal">
                Your Trusted Partner in <br />
                <span className="text-[#4ccedc]">Medical Education</span>
              </h3>

              <div className="mb-6">
                <p className="text-lg mb-4 text-gray-800 leading-relaxed">
                  With years of experience in guiding students for MBBS
                  programs, we have developed unmatched expertise in counseling,
                  admissions, and international education pathways.
                </p>
                <p className="text-lg mb-6 text-gray-800 leading-relaxed">
                  Our dedicated team ensures smooth application processes, visa
                  support, and continuous mentoring to help you achieve your
                  dream of becoming a doctor.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertisePoints.map((point, index) => (
                  <div key={index} className="text-start">
                    <h5 className=" text-gray-900">
                      <i className={`${point.icon} text-[#4ccedc] text-xl`}></i>{" "}
                      {point.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img src="/images/expert-1.jpg" className="rounded-2xl" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
