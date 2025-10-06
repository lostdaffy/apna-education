// components/HeroCarousel.jsx
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

// Swiper styles import करें
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const swiperRef = useRef(null);
  
  const slides = [
    {
      id: 1,
      image: "/images/1.jpg",
      title: "Study MBBS in Abroad",
    },
    {
      id: 2,
      image: "/images/2.jpg",
      title: "Study MBBS in India",
    },
    {
      id: 3,
      image: "/images/3.jpg",
      title: "Study MBBS by Experts",
    },
  ];

  // Animation restart function
  const restartAnimations = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      // Remove animation classes
      const titleElement = activeSlide.querySelector('.slide-title');
      const buttonElement = activeSlide.querySelector('.slide-button');
      
      if (titleElement && buttonElement) {
        titleElement.classList.remove('animate-slideUpFade');
        buttonElement.classList.remove('animate-slideUpFadeDelay');
        
        // Force reflow
        titleElement.offsetHeight;
        buttonElement.offsetHeight;
        
        // Add animation classes back
        setTimeout(() => {
          titleElement.classList.add('animate-slideUpFade');
          buttonElement.classList.add('animate-slideUpFadeDelay');
        }, 50);
      }
    }
  };

  return (
    <div className="relative h-[600px] sm:h-screen overflow-hidden">
      <Swiper
        ref={swiperRef}
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
        onSlideChange={(swiper) => restartAnimations(swiper)}
        onInit={(swiper) => restartAnimations(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-all duration-[8000ms] ease-out scale-110 hover:scale-125"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="px-4 max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-start">
                  <div className="space-y-6">
                    <h1 className="slide-title max-w-5xl uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight sm:leading-snug md:leading-snug">
                      {slide.title}
                    </h1>
                    <div className="slide-button">
                      <Link
                        to="/contact"
                        className="inline-flex items-center uppercase text-center bg-[#1e73be] hover:bg-[#1a66a3] text-white font-semibold text-base py-4 px-8 transition-all duration-300"
                      >
                        Book Now |
                        <i className="ri-arrow-right-long-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 swiper-pagination-bullet"
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpFadeDelay {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUpFade {
          animation: slideUpFade 1s ease-out forwards;
        }

        .animate-slideUpFadeDelay {
          animation: slideUpFadeDelay 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;
