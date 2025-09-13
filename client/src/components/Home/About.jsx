import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image with Overlay */}
            <div className="relative order-2 lg:order-1 h-64 sm:h-80 md:h-96 lg:h-full">
              <img
                src="./images/about.jpg"
                alt="Students studying"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#57cfdc] opacity-20 rounded-lg"></div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <span className="text-base sm:text-lg font-semibold text-[#4ccedc]">
                Who We Are
              </span>

              <h2 className="uppercase text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold my-4 text-[#242424] leading-snug sm:leading-tight">
                About{" "}
                <span className="text-[#4ccedc]">
                  Apna <br /> Education
                </span>
              </h2>

              <div className="py-5">
                <p className="text-sm sm:text-base md:text-lg mb-4 text-gray-600 leading-relaxed">
                  Since 2019, we have been dedicated to making international
                  education accessible for Indian students pursuing MBBS degrees
                  both in India and abroad.
                </p>
                <p className="text-sm sm:text-base md:text-lg mb-4 text-gray-600 leading-relaxed">
                  We provide personalized guidance for your study abroad journey
                  with expert counseling, global connections, and 24/7 support.
                  Our experienced team understands the complexities of medical
                  education admissions and visa processes.
                </p>
              </div>

              <Link
                to="/about"
                className="bg-gray-900 text-[#4ccedc] font-semibold text-sm sm:text-base md:text-base rounded-full py-3 sm:py-4 px-6 sm:px-10 hover:bg-gray-700 inline-block"
              >
                <i className="ri-graduation-cap-line me-2"></i> Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
