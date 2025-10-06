import React, { useState } from "react";
import { Link } from "react-router-dom";
import { universities } from "../data/Data";

const groupedByCountry = universities.reduce((acc, uni) => {
  if (!acc[uni.address.country]) acc[uni.address.country] = [];
  acc[uni.address.country].push(uni);
  return acc;
}, {});

const navbarData = {
  brand: { logo: "/images/logo-circle.png", link: "/" },
  desktopMenu: [
    { name: "Home", path: "/" },
    {
      name: "Country",
      path: "/countries",
      children: Object.keys(groupedByCountry).map((country) => ({
        name: country,
        path: `/countries/${country.toLowerCase()}`,
        children: groupedByCountry[country].map((uni) => ({
          name: uni.name,
          path: `/universities/${uni.id}`,
        })),
      })),
    },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ],
  callNow: { label: "Contact Us", phone: "+919667601325" },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            {/* Left side - Contact info */}
            <div className="flex items-center space-x-6 text-gray-900">
              <div className="md:flex items-center text-sm sm:text-base">
                <span>
                  <strong>Time : </strong>{" "}
                  <span className="text-gray-600">10:00 AM - 6:30 PM</span>
                </span>
              </div>
            </div>

            {/* Right side - Apply button */}
            <div className="flex items-center gap-5">
              <Link
                to="/contact"
                className="bg-[#1e73be] text-white font-semibold px-6 py-2 hover:bg-[#165a94] transition-colors flex items-center text-sm"
              >
                <i className="ri-file-text-line mr-2"></i>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 py-2 z-50 bg-[#242424] shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to={navbarData.brand.link}>
              <img src={navbarData.brand.logo} className="w-20" alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-14 relative">
                {navbarData.desktopMenu.map((item, i) => (
                  <li key={i} className="relative group">
                    {!item.children ? (
                      <Link
                        className="text-white text-base font-medium hover:text-[#1e73be] transition-colors py-2"
                        to={item.path}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <span className="text-white text-base font-medium flex items-center cursor-pointer hover:text-[#1e73be] transition-colors py-2">
                          {item.name}
                          <svg
                            className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>

                        {/* 1st-level dropdown (countries) */}
                        <ul className="absolute left-0 top-full mt-2 w-64 bg-[#2a2a2a] rounded-lg shadow-2xl border border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                          {item.children.map((country, ci) => (
                            <li key={ci} className="relative group/country">
                              <div className="flex items-center justify-between px-4 py-3 text-gray-200 cursor-pointer hover:bg-[#353535] hover:text-[#1e73be] transition-colors first:rounded-t-lg">
                                <Link
                                  to={country.path}
                                  className="flex-1 font-medium"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {country.name}
                                </Link>
                                {country.children && (
                                  <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                )}
                              </div>

                              {/* 2nd-level dropdown (universities) */}
                              {country.children && (
                                <ul className="absolute left-full top-0 w-80 bg-[#2a2a2a] rounded-lg shadow-2xl border border-gray-600 opacity-0 invisible group-hover/country:opacity-100 group-hover/country:visible transition-all duration-300 z-[9999]">
                                  <li className="px-4 py-3 border-b border-gray-600 bg-[#353535] rounded-t-lg">
                                    <span className="text-sm font-semibold text-[#1e73be]">
                                      Universities in {country.name}
                                    </span>
                                  </li>
                                  <div className="max-h-64 overflow-y-auto">
                                    {country.children.map((uni, ui) => (
                                      <li key={ui}>
                                        <Link
                                          to={uni.path}
                                          className="block px-4 py-3 text-gray-300 hover:text-[#1e73be] hover:bg-[#353535] text-sm transition-colors border-b border-gray-700 last:border-b-0 last:rounded-b-lg"
                                        >
                                          <i className="ri-university-line mr-2 text-gray-400"></i>
                                          {uni.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </div>
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>

           
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white p-2" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden mt-4 transition-all duration-300 ${
              isMenuOpen ? "block opacity-100" : "hidden opacity-0"
            }`}
          >
            <div className="bg-[#2a2a2a] rounded-lg p-4 border border-gray-600 shadow-xl">
              <ul className="flex flex-col space-y-2">
                {navbarData.desktopMenu.map((item, i) => (
                  <li key={i}>
                    {!item.children ? (
                      <Link
                        to={item.path}
                        className="text-gray-200 hover:text-[#1e73be] block py-3 px-3 rounded-lg hover:bg-[#353535] transition-colors font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <details className="text-gray-200">
                        <summary className="cursor-pointer py-3 px-3 hover:text-[#1e73be] hover:bg-[#353535] rounded-lg transition-colors list-none font-medium">
                          <span className="flex items-center justify-between">
                            <span>{item.name}</span>
                            <svg
                              className="w-4 h-4 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </summary>
                        <ul className="mt-2 space-y-1 bg-[#353535] rounded-lg p-3 border border-gray-600">
                          {item.children.map((country, ci) => (
                            <li key={ci}>
                              <details>
                                <summary className="cursor-pointer py-2 px-3 text-gray-300 hover:text-[#1e73be] hover:bg-[#404040] rounded transition-colors list-none">
                                  <span className="flex items-center justify-between">
                                    <span>{country.name}</span>
                                    <svg
                                      className="w-3 h-3"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  </span>
                                </summary>
                                <ul className="mt-1 space-y-1 bg-[#404040] rounded p-2 border border-gray-600 max-h-48 overflow-y-auto">
                                  {country.children.map((uni, ui) => (
                                    <li key={ui}>
                                      <Link
                                        to={uni.path}
                                        className="py-2 px-3 text-gray-300 hover:text-[#1e73be] hover:bg-[#4a4a4a] transition-colors text-sm rounded flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <i className="ri-university-line mr-2 text-gray-400"></i>
                                        {uni.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </li>
                ))}

                {/* Mobile Call Now Button */}
                <li className="pt-4 border-t border-gray-600">
                  <a
                    href={`tel:${navbarData.callNow.phone}`}
                    className="bg-[#1e73be] text-white font-semibold rounded-lg py-3 px-4 hover:bg-[#165a94] transition-colors flex items-center justify-center w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className="ri-phone-fill mr-2"></i>
                    {navbarData.callNow.label}
                  </a>
                </li>

                {/* Mobile Apply Button */}
                <li>
                  <Link
                    to="/contact"
                    className="bg-[#353535] text-[#1e73be] font-semibold rounded-lg py-3 px-4 hover:bg-[#404040] transition-colors flex items-center justify-center w-full border border-[#1e73be]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className="ri-file-text-line mr-2"></i>
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
