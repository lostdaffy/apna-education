import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "ri-user-star-line",
      title: "Expert Counselors",
      description:
        "Our team consists of experienced education counselors who understand the nuances of international medical education and admission processes.",
    },
    {
      icon: "ri-eye-line",
      title: "Transparent Process",
      description:
        "No hidden costs, no false promises. We believe in complete transparency throughout the admission process, keeping you informed at every step.",
    },
    {
      icon: "ri-global-line",
      title: "Global Network",
      description:
        "Strong partnerships with 50+ universities across 8 countries, giving you access to diverse opportunities and the best fit for your profile.",
    },
    {
      icon: "ri-customer-service-2-line",
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for all your queries, concerns, and emergencies. We're always here when you need us most.",
    },
    {
      icon: "ri-trophy-line",
      title: "Proven Success",
      description:
        "With a 98% success rate and 500+ happy students, our track record speaks for itself. Your success is our greatest achievement.",
    },
    {
      icon: "ri-roadmap-line",
      title: "End-to-End Service",
      description:
        "From university selection to visa approval and travel arrangements, we handle every aspect of your study abroad journey.",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Students Guided",
      icon: "ri-graduation-cap-line",
    },
    { number: "6+", label: "Years Experience", icon: "ri-time-line" },
    { number: "50+", label: "Partner Universities", icon: "ri-building-line" },
    { number: "98%", label: "Success Rate", icon: "ri-bar-chart-line" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection title="About" highlight="Apna Education" />

      {/* Company Overview Section */}
      <section className="py-24 bg-white relative" id="overview">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div
              className={`animate-on-scroll ${
                isVisible["overview-text"] ? "visible" : ""
              }`}
              id="overview-text"
            >
              <div className="relative mb-10">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-[#242424]">Who We</span>
                  <span className="text-gray-600 ml-4">Are</span>
                </h2>
                <div className="absolute -left-8 top-0 w-2 h-full bg-[#242424]"></div>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  ApnaEducation is a leading educational consultancy
                  specializing in MBBS admissions for Indian students seeking
                  quality medical education both in India and abroad. Since our
                  establishment in 2019, we have been committed to bridging the
                  gap between aspiring medical students and world-class
                  educational opportunities.
                </p>
                <p className="leading-relaxed text-gray-600">
                  Our mission is simple yet powerful: to make international
                  medical education accessible, affordable, and achievable for
                  every deserving student. We understand that pursuing MBBS
                  abroad can be overwhelming, and that's where we step in to
                  provide comprehensive guidance and unwavering support
                  throughout your journey.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`animate-on-scroll ${
                isVisible["overview-image"] ? "visible" : ""
              }`}
              id="overview-image"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#242424] opacity-10"></div>
                <img
                  src="./images/who.jpg"
                  alt="ApnaEducation team"
                  className="relative w-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gray-50 border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <i
                  className={`${stat.icon} text-3xl text-gray-600 mb-3 block group-hover:text-[#242424] transition-colors`}
                ></i>
                <h3 className="text-3xl font-bold text-[#242424] mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#242424] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 border border-gray-600 rounded-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border border-gray-600 rounded-full opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-16 animate-on-scroll ${
              isVisible["mission-header"] ? "visible" : ""
            }`}
            id="mission-header"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="text-gray-600">Mission & Vision</span>
            </h2>
            <div className="w-32 h-1 bg-gray-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div
              className={`group animate-on-scroll ${
                isVisible["mission-card"] ? "visible" : ""
              }`}
              id="mission-card"
            >
              <div className="bg-white h-full p-12 hover:transform hover:scale-105 transition-all duration-500">
                <div className="border-b-4 border-[#242424] pb-6 mb-8">
                  <div className="w-20 h-20 bg-[#242424] flex items-center justify-center mb-6">
                    <i className="ri-focus-2-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-[#242424]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower aspiring medical professionals by providing
                  comprehensive guidance, transparent processes, and continuous
                  support in their journey towards achieving their MBBS dreams.
                  We strive to make quality medical education accessible to
                  every deserving student through our expertise and global
                  partnerships.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className={`group animate-on-scroll ${
                isVisible["vision-card"] ? "visible" : ""
              }`}
              id="vision-card"
            >
              <div className="bg-white h-full p-12 hover:transform hover:scale-105 transition-all duration-500">
                <div className="border-b-4 border-gray-600 pb-6 mb-8">
                  <div className="w-20 h-20 bg-gray-600 flex items-center justify-center mb-6">
                    <i className="ri-eye-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-[#242424]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become the most trusted and preferred educational
                  consultancy for medical education globally. We envision a
                  future where geographical boundaries don't limit educational
                  opportunities, and every student can access world-class
                  medical education that matches their aspirations and
                  capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center mb-16 animate-on-scroll ${
              isVisible["why-header"] ? "visible" : ""
            }`}
            id="why-header"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#242424] mb-6">
              Why Choose <span className="text-gray-600">ApnaEducation</span>
            </h2>
            <div className="w-32 h-1 bg-[#242424] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the competitive world of education
              consultancy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group animate-on-scroll ${
                  isVisible[`feature-${index}`] ? "visible" : ""
                }`}
                id={`feature-${index}`}
              >
                <div className="h-full bg-white border-2 border-gray-200 p-10 hover:border-[#242424] hover:bg-[#242424] transition-all duration-500">
                  <div className="w-16 h-16 bg-gray-600 flex items-center justify-center mb-8 group-hover:bg-white transition-colors">
                    <i
                      className={`${feature.icon} text-white text-2xl group-hover:text-[#242424] transition-colors`}
                    ></i>
                  </div>

                  <h3 className="text-2xl font-bold text-[#242424] mb-6 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default About;
