// components/HeroCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
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
        fadeEffect={{
          crossFade: true,
        }}
        speed={1500}
        loop={true}
        grabCursor={true}
        touchRatio={1}
        threshold={10}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-all duration-[8000ms] ease-out scale-110 hover:scale-125"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </div>

            {/* Content with Animations */}
            <div className="relative">
              <div className="px-4 max-w-7xl mx-auto">
                <div className="flex justify-start pt-20">
                  <div>
                    <h1 className="max-w-2xl uppercase text-7xl md:text-8xl mb-10 text-gray-900 font-bold animate-slideInUp">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-50 animate-slideInUp delay-300">
                      {slide.subtitle}
                    </h2>

                    <div className="mt-20">
                      <Link className="bg-gray-900 text-[#4ccedc] font-semibold text-xl rounded-full py-4 px-10 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 animate-slideInUp delay-700 group">
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

      {/* Enhanced Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 backdrop-blur-md border border-white/20 group">
        <svg
          className="w-6 h-6 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-x-0.5"
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
      <div className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/15 hover:bg-white/25 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 backdrop-blur-md border border-white/20 group">
        <svg
          className="w-6 h-6 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:translate-x-0.5"
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
