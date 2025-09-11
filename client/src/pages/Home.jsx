import React from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  const countries = [
    {
      name: "Russia",
      image: "/images/russia.jpg",
      description: "Affordable MBBS programs with WHO recognized degrees.",
    },
    {
      name: "Ukraine",
      image: "/images/ukraine.jpg",
      description: "Quality medical education with modern infrastructure.",
    },
    {
      name: "Georgia",
      image: "/images/georgia.jpg",
      description: "English medium courses with European standards.",
    },
    {
      name: "Philippines",
      image: "/images/philippines.jpg",
      description: "US curriculum with hands-on clinical experience.",
    },
    {
      name: "Kazakhstan",
      image: "/images/kazakhstan.jpg",
      description: "Affordable fees with quality medical education.",
    },
    {
      name: "China",
      image: "/images/china.jpg",
      description: "Advanced medical facilities with research opportunities.",
    },
    {
      name: "Bangladesh",
      image: "/images/bangladesh.jpg",
      description: "Nearby destination with familiar culture and language.",
    },
    {
      name: "India",
      image: "/images/india.jpg",
      description: "Top government and private medical colleges.",
    },
  ];

  const expertisePoints = [
    {
      icon: "ri-graduation-cap-line",
      title: "Admission Guidance",
      description:
        "Expert counseling for university selection and application process",
    },
    {
      icon: "ri-passport-line",
      title: "Visa & Travel Support",
      description: "Complete visa processing and travel arrangement assistance",
    },
    {
      icon: "ri-award-line",
      title: "Scholarship Assistance",
      description: "Help securing financial aid and merit-based scholarships",
    },
    {
      icon: "ri-customer-service-2-line",
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for all your queries and concerns",
    },
  ];

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
      {/* Hero Section */}
      <section
        className="relative min-h-screen pt-10 flex justify-center text-white text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex justify-center pt-5 mt-3">
            <div className="max-w-5xl mt-0">
              <span className="pb-4">
                <i className="ri-school-line text-6xl md:text-8xl"></i>
              </span>

              {/* Responsive Heading */}
              <h1 className="font-bold mb-10 uppercase text-4xl md:text-6xl lg:text-8xl">
                Making Your MBBS Journey Easy
              </h1>

              {/* Responsive Paragraph */}
              <p className="text-lg md:text-xl pb-10 px-2 md:px-20 text-gray-300 leading-relaxed">
                Established in 2019, we make studying abroad easier by
                simplifying the admission process — from selecting the right
                university to guiding you at every step of the way.
              </p>

              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-[#242424] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <i className="ri-earth-line mr-2"></i> Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 min-h-screen flex items-center bg-gray-50"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <img
                src="./images/about.jpg"
                alt="Students studying"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
                About <span className="text-gray-600">ApnaEducation</span>
              </h2>
              <p className="text-lg mb-4 text-gray-600 leading-relaxed">
                Since 2019, we have been dedicated to making international
                education accessible for Indian students pursuing MBBS degrees
                both in India and abroad.
              </p>
              <p className="text-lg mb-4 text-gray-600 leading-relaxed">
                We provide personalized guidance for your study abroad journey
                with expert counseling, global connections, and 24/7 support.
                Our experienced team understands the complexities of medical
                education admissions and visa processes.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <i className="ri-check-line text-[#242424] text-xl mr-2"></i>
                  <span className="text-gray-700">Expert Counseling</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#242424] text-xl mr-2"></i>
                  <span className="text-gray-700">Visa Assistance</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#242424] text-xl mr-2"></i>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#242424] text-xl mr-2"></i>
                  <span className="text-gray-700">Global Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section
        className="py-20 min-h-screen flex items-center bg-[#242424]"
        id="countries"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Popular <span className="text-gray-300">MBBS Destinations</span>
            </h2>
            <p className="text-lg text-gray-300">
              Explore top countries offering world-class medical education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40  group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h4 className="font-bold text-xl mb-2">{country.name}</h4>
                    <p className="text-sm text-gray-200">
                      {country.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50" id="expertise">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
              Our <span className="text-gray-600">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Empowering students with comprehensive guidance for their medical
              education journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#242424]">
                Your Trusted Partner in{" "}
                <span className="text-gray-600">Medical Education</span>
              </h3>

              <div className="mb-6">
                <p className="text-lg mb-4 text-gray-600 leading-relaxed">
                  With years of experience in guiding students for MBBS
                  programs, we have developed unmatched expertise in counseling,
                  admissions, and international education pathways.
                </p>
                <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                  Our dedicated team ensures smooth application processes, visa
                  support, and continuous mentoring to help you achieve your
                  dream of becoming a doctor.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-[#242424] mb-1">
                    500+
                  </h4>
                  <small className="text-gray-600">Students Guided</small>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-[#242424] mb-1">
                    50+
                  </h4>
                  <small className="text-gray-600">Partner Universities</small>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold text-2xl text-[#242424] mb-1">
                    98%
                  </h4>
                  <small className="text-gray-600">Success Rate</small>
                </div>
              </div>
            </div>

            {/* Right Side - Expertise Points */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertisePoints.map((point, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <i
                        className={`${point.icon} text-[#242424] text-3xl`}
                      ></i>
                    </div>
                    <h5 className="font-semibold mb-2 text-[#242424]">
                      {point.title}
                    </h5>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
