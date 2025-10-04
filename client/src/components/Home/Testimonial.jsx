import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "MBBS Student, Russia",
      initials: "PR",
      testimonial:
        "ApnaEducation made my dream of studying MBBS in Russia come true. Their guidance throughout the process was exceptional and they were always available to help.",
    },
    {
      name: "Amit Kumar",
      location: "MBBS Student, Ukraine",
      initials: "AK",
      testimonial:
        "The visa process seemed complex, but their team made it so simple. Now I'm studying in Ukraine thanks to their incredible support and expertise.",
    },
    {
      name: "Sneha Gupta",
      location: "MBBS Student, Georgia",
      initials: "SG",
      testimonial:
        "From college selection to landing in Georgia, they were with me every step. Highly recommended for anyone seeking medical education abroad!",
    },
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section
        className="py-16 sm:py-20 min-h-screen bg-white"
        id="testimonials"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#242424]">
              What <span className="text-[#1e73be]">Students Say</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Success stories from our happy students who achieved their dreams
            </p>
            <div className="w-16 sm:w-20 h-1 bg-[#1e73be] mx-auto mt-6 rounded"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg border-0 p-6 sm:p-8 relative hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                    <i className="ri-double-quotes-l text-[#1e73be] text-lg sm:text-xl"></i>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-[#1e73be] mr-1 text-sm sm:text-base"
                    ></i>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Student Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mr-4 bg-gradient-to-br from-[#1e73be] to-[#1e73be]/70 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-lg">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h6 className="font-bold text-[#242424] text-sm sm:text-base mb-1">
                      {testimonial.name}
                    </h6>
                    <small className="text-gray-600 text-xs sm:text-sm">
                      {testimonial.location}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
