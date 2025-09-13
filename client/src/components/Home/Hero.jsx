// components/HeroCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "/images/hero-1.png",
      title: "Study MBBS in India",
      subtitle: "World-Class Medical Education at Affordable Costs",
    },
    {
      id: 2,
      image: "/images/hero-2.jpg",
      title: "Study MBBS in Abroad",
      subtitle: "International Medical Education Opportunities",
    },
    {
      id: 3,
      image: "/images/hero-3.jpg",
      title: "Study MBBS by Experts",
      subtitle: "Your Trusted Partner for MBBS Admission",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        loop={true}
        grabCursor={true}
        touchRatio={1}
        threshold={10}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-all duration-[8000ms] ease-out scale-110 hover:scale-125"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative">
              <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-start pt-20">
                  <div>
                    <h1 className="md:max-w-2xl uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 lg:mb-10 text-gray-900 font-bold animate-slideInUp leading-tight sm:leading-snug md:leading-snug">
                      {slide.title}
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-50 animate-slideInUp delay-300 mb-6 sm:mb-8 lg:mb-10">
                      {slide.subtitle}
                    </h2>

                    <div className="mt-8 sm:mt-10 lg:mt-20">
                      <Link className="bg-gray-900 text-[#4ccedc] font-semibold text-base sm:text-lg md:text-xl rounded-full py-3 sm:py-4 px-6 sm:px-10 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 animate-slideInUp delay-700 group inline-block">
                        <i className="ri-graduation-cap-line me-2"></i> Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="swiper-button-prev-custom absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 backdrop-blur-md border border-white/20 group">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="swiper-button-next-custom absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 backdrop-blur-md border border-white/20 group">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
