// HeroSection.jsx
import React from "react";

const HeroSection = ({ title, highlight }) => {
  return (
    <section
      className="relative flex items-center h-[40vh] text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/heading.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-start">
          {title}{" "}
          {highlight && (
            <span className="text-[#4ccedc]">{highlight}</span>
          )}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
