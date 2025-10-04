import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/images/logo-circle.png" className="w-25 mb-5" alt="" />
              <p className="mb-6 text-gray-300 leading-relaxed">
                Making your dream of international medical education a reality
                with expert guidance, comprehensive support, and personalized
                counseling since 2019.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <Link
                  to="https://www.facebook.com/share/19m3YpHA7o/"
                  className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1e73be] to-[#1e73be]/80 rounded-lg hover:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-facebook-fill text-xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                </Link>

                <Link
                  to="https://www.instagram.com/apna_education_?igsh=Z2l0ZnN4NWl3dTEz"
                  className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1e73be] to-[#1e73be]/80 rounded-lg hover:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-instagram-fill text-xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                </Link>

                <Link
                  to="https://www.youtube.com/channel/UCG8tCsZ1as5lIF-LxLG3_2g"
                  className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1e73be] to-[#1e73be]/80 rounded-lg hover:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-youtube-fill text-xl text-white group-hover:scale-110 transition-transform duration-300"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-bold mb-6 text-[#1e73be]">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#1e73be] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-1 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#1e73be] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-1 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  className="text-gray-300 hover:text-[#1e73be] transition-colors duration-200 flex items-center group"
                >
                  <i className="ri-arrow-right-s-line mr-1 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* MBBS Destinations */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-bold mb-6 text-[#1e73be]">
              MBBS Destinations
            </h5>
            <ul className="space-y-3">
              {[
                "MBBS in Russia",
                "MBBS in Ukraine",
                "MBBS in Georgia",
                "MBBS in Philippines",
                "MBBS in Kazakhstan",
                "MBBS in India",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-[#1e73be] transition-colors duration-200 flex items-center"
                  >
                    <i className="ri-star-line mr-2 text-[#1e73be]"></i>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h5 className="text-lg font-bold mb-6 text-[#1e73be]">
              Contact Information
            </h5>

            {/* Phone */}
            <div className="flex items-center mb-4 p-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-200">
              <div className="mr-3">
                <i className="ri-phone-line text-xl text-[#1e73be]"></i>
              </div>
              <div>
                <h6 className="text-sm font-semibold mb-1">Call Now</h6>
                <Link
                  to="tel:+919667601325"
                  className="text-[#1e73be] hover:text-white font-bold transition-colors duration-200"
                >
                  +91 9667601325
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center mb-4 p-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-200">
              <div className="mr-3">
                <i className="ri-mail-line text-xl text-[#1e73be]"></i>
              </div>
              <div>
                <h6 className="text-sm font-semibold mb-1">Email Us</h6>
                <Link
                  to="mailto:apnaeducation00@gmail.com"
                  className="text-[#1e73be] hover:text-white transition-colors duration-200 break-all"
                >
                  apnaeducation00@gmail.com
                </Link>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start mb-4 p-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-200">
              <div className="mr-3 mt-1">
                <i className="ri-map-pin-line text-xl text-[#1e73be]"></i>
              </div>
              <div>
                <h6 className="text-sm font-semibold mb-1">Our Office</h6>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Shree Ram Place, 3rd Floor
                  <br />
                  Sector 27, Noida – 201301
                  <br />
                  Near Sector 18 Metro Station,
                  <br />
                  Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300">
                © 2025 <strong className="text-[#1e73be]">ApnaEducation</strong>
                . All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 flex items-center justify-center md:justify-end">
                <i className="ri-award-line text-[#1e73be] mr-2"></i>
                Established in 2019 |{" "}
                <strong className="text-[#1e73be] ml-1">
                  Trusted by 500+ Students
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
