import React from "react";
import { Link } from "react-router-dom";

const FirstBanner = () => {
  return (
    <section className="bg-white">
      {/* Services Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {/* Card */}
          <div className="group bg-white p-6 sm:p-8 border border-gray-900 rounded-xl shadow-[4px_4px_0_0_#111] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3 mb-3">
              <i className="ri-compass-3-line text-[#1e73be] text-2xl sm:text-3xl"></i>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1e73be]">
                Visa Guidance
              </h3>
            </div>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              Expert visa guidance to ensure smooth, fast, and hassle‑free
              approval for the study abroad journey.
            </p>
          </div>

          <div className="group bg-white p-6 sm:p-8 border border-gray-900 rounded-xl shadow-[4px_4px_0_0_#111] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3 mb-3">
              <i className="ri-task-line text-[#1e73be] text-2xl sm:text-3xl"></i>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1e73be]">
                100% Admission Support
              </h3>
            </div>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              End‑to‑end help with counseling, documentation, visa assistance,
              and post‑arrival onboarding.
            </p>
          </div>

          <div className="group bg-white p-6 sm:p-8 border border-gray-900 rounded-xl shadow-[4px_4px_0_0_#111] transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-3 mb-3">
              <i className="ri-home-6-line text-[#1e73be] text-2xl sm:text-3xl"></i>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1e73be]">
                Best Colleges
              </h3>
            </div>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              Admissions to top, government‑recognized medical colleges with
              global recognition and fair fees.
            </p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative">
        {/* Background image */}
        <div
          className="relative h-[62vh] sm:h-[64vh] md:h-[60vh] lg:h-[64vh] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/zwinger-palace.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative h-full">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
              <div className="grid h-full items-center gap-8 md:grid-cols-2">
                {/* Left copy */}
                <div className="text-white max-w-xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    50+ Best Universities, Scholarships, and 10+ Countries
                  </h1>

                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-[#1e73be] text-white font-semibold text-sm sm:text-base py-3 px-6 sm:px-8 shadow hover:bg-[#175d97] transition-colors"
                    >
                      <i className="ri-graduation-cap-line mr-2"></i>
                      Apply Now
                    </Link>
                  </div>
                </div>

                {/* Right visual - अब mobile में भी दिखेगा */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <img
                      src="/images/banner-img.png"
                      alt="Students and universities"
                      className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[520px] drop-shadow-2xl"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstBanner;
