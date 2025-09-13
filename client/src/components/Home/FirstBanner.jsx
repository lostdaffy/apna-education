import React from "react";
import { Link } from "react-router-dom";

const FirstBanner = () => {
  return (
    <div className="bg-white">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Visa Guidance */}
          <div className="bg-white p-6 sm:p-8 md:p-10 border border-gray-900 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#4ccedc]">
              Visa Guidance
            </h3>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              Expert visa guidance to ensure smooth, fast, and hassle-free
              approval for your study abroad journey.
            </p>
          </div>

          {/* 100% Admission Support */}
          <div className="bg-white p-6 sm:p-8 md:p-10 border border-gray-900 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#4ccedc]">
              100% Admission Support
            </h3>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              Get 100% admission support with complete guidance,
              documentation, visa assistance, and post-arrival services.
            </p>
          </div>

          {/* Best Colleges */}
          <div className="bg-white p-6 sm:p-8 md:p-10 border border-gray-900 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#4ccedc]">
              Best Colleges
            </h3>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              Get admission in top government-recognized medical colleges with
              global recognition and affordable fee structure.
            </p>
          </div>
        </div>
      </div>

      {/* Main Hero Banner */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]"
        style={{ backgroundImage: "url('/images/students-banner.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Left Content */}
          <div className="text-gray-900 max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight mb-6">
              50+ Best Universities
              <br />
              Scholarship Programs
              <br />
              From 8+ Countries
            </h1>

            <Link
              to="/contact"
              className="bg-gray-900 text-[#4ccedc] font-semibold text-sm sm:text-base md:text-lg rounded-full py-3 sm:py-4 px-6 sm:px-10 hover:bg-gray-700 inline-block"
            >
              <i className="ri-graduation-cap-line mr-2"></i> Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
