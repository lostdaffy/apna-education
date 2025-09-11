import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Home/Hero";
import Countries from "../components/Home/Countries";
import About from "../components/Home/About";
import Expertise from "../components/Home/Expertise";

const Home = () => {


  const partners = [
    {
      name: "Kazan Federal University",
      country: "Russia",
      description:
        "Established in 1804, one of Russia's oldest and most prestigious universities offering quality medical education.",
      website: "https://eng.kpfu.ru",
    },
    {
      name: "Bogomolets National Medical University",
      country: "Ukraine",
      description:
        "Leading medical university in Ukraine with state-of-the-art facilities and excellent clinical training programs.",
      website: "https://nmuofficial.com/en/",
    },
    {
      name: "Tbilisi State Medical University",
      country: "Georgia",
      description:
        "Premier medical institution offering European standard education with excellent clinical exposure and research opportunities.",
      website: "https://tsmu.edu/",
    },
    {
      name: "University of Perpetual Help System DALTA",
      country: "Philippines",
      description:
        "Renowned for its US-based curriculum and excellent clinical rotations in American-affiliated hospitals.",
      website: "https://perpetualdalta.edu.ph",
    },
    {
      name: "Kazakh National Medical University",
      country: "Kazakhstan",
      description:
        "Leading medical university with affordable fees, modern facilities, and strong international recognition.",
      website: "https://kaznmu.kz/en/",
    },
    {
      name: "Top Private Medical Colleges",
      country: "India",
      description:
        "Partnership with leading private medical colleges across India offering direct admissions and management quota seats.",
      website: "https://www.nmc.org.in/",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "MBBS Student, Russia",
      batch: "Class of 2023",
      initials: "PR",
      gradient: "from-[#242424] to-gray-700",
      testimonial:
        "ApnaEducation made my dream of studying MBBS in Russia come true. Their guidance throughout the process was exceptional and they were always available to help.",
    },
    {
      name: "Amit Kumar",
      location: "MBBS Student, Ukraine",
      batch: "Class of 2024",
      initials: "AK",
      gradient: "from-[#242424] to-gray-600",
      testimonial:
        "The visa process seemed complex, but their team made it so simple. Now I'm studying in Ukraine thanks to their incredible support and expertise.",
    },
    {
      name: "Sneha Gupta",
      location: "MBBS Student, Georgia",
      batch: "Class of 2023",
      initials: "SG",
      gradient: "from-[#242424] to-gray-800",
      testimonial:
        "From college selection to landing in Georgia, they were with me every step. Highly recommended for anyone seeking medical education abroad!",
    },
  ];

  return (
    <div>
      <Hero />

      <About />

      <Countries />

      <Expertise />

      {/* Partners Section */}
      <section
        className="py-20 min-h-screen flex items-center bg-[#242424]"
        id="partners"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our <span className="text-gray-300">Partner Institutes</span>
            </h2>
            <p className="text-lg text-gray-300">
              World-renowned universities and medical colleges we partner with
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mt-6 rounded"></div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-[#242424] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-school-line text-white text-3xl"></i>
                </div>

                <div className="flex-grow flex flex-col">
                  <h5 className="font-bold mb-2 text-[#242424] text-lg leading-tight">
                    {partner.name}
                  </h5>
                  <p className="text-gray-500 text-sm mb-3 font-medium">
                    {partner.country}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    {partner.description}
                  </p>
                </div>

                {/* University Link Button */}
                <Link
                  to={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center bg-[#242424] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors duration-300 w-full"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  Visit Website
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 min-h-screen flex items-center bg-gray-50"
        id="testimonials"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
              What <span className="text-gray-600">Students Say</span>
            </h2>
            <p className="text-lg text-gray-600">
              Success stories from our happy students who achieved their dreams
            </p>
            <div className="w-16 h-1 bg-[#242424] mx-auto mt-6 rounded"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg border-0 p-6 relative hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                    <i className="ri-double-quotes-l text-[#242424] text-lg"></i>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-yellow-400 mr-1"
                    ></i>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Student Info */}
                <div className="flex items-center">
                  <div
                    className={`w-14 h-14 mr-4 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h6 className="font-bold text-[#242424] mb-1">
                      {testimonial.name}
                    </h6>
                    <small className="text-gray-600">
                      {testimonial.location}
                    </small>
                    <div className="mt-1">
                      <small className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {testimonial.batch}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default Home;
