import React from "react";

export default function Countries() {
  return (
    <>
      <section className="py-20 min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Popular{" "}
                <span className="text-[#4ccedc] relative">
                  MBBS Destinations
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#4ccedc] opacity-30 rounded-full"></div>
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover world-class medical education opportunities across the
              world
            </p>
          </div>

          {/* Map Container */}
          <div className="relative">
            <div className="rounded-2xl ">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/map.jpg"
                  className="rounded-2xl  border-2 border-[#4ccedc] w-full h-auto object-cover"
                  alt="World map showing popular MBBS destinations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
