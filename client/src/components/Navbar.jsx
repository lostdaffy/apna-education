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
    { name: "About", path: "/about" },
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
    { name: "Contact", path: "/contact" },
  ],
  callNow: { label: "Call Now", phone: "+919667601325" },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 py-2 z-50 bg-[#88d0d8] shadow-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link to={navbarData.brand.link}>
            <img src={navbarData.brand.logo} className="w-25" alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-14 relative">
              {navbarData.desktopMenu.map((item, i) => (
                <li key={i} className="relative group">
                  {!item.children ? (
                    <Link
                      className="text-gray-900 text-[17px] font-semibold hover:text-gray-200 transition-colors"
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <span className="text-gray-900 text-[17px] font-semibold flex items-center cursor-pointer">
                        {item.name}
                        <svg
                          className="w-4 h-4 ml-1"
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
                      <ul
                        className="absolute left-0 mt-2 w-60 bg-[#242424] rounded-md shadow-xl  
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-200 z-50"
                      >
                        {item.children.map((country, ci) => (
                          <li key={ci} className="relative group/country">
                            <div className=" flex items-center justify-between px-6 py-3 text-white  cursor-pointer">
                              <Link
                                className="flex-1 border-b border-gray-500"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {country.name}
                              </Link>
                              {country.children && (
                                <span className="ml-2 text-white">›</span>
                              )}
                            </div>

                            {/* 2nd-level dropdown (universities) */}
                            {country.children && (
                              <ul
                                className="absolute left-full top-0 w-80 bg-[#242424] rounded-md shadow-lg border border-[#242424] 
                                opacity-0 invisible group-hover/country:opacity-100 group-hover/country:visible 
                                transition-all duration-200 z-50 max-h-80 overflow-y-auto"
                              >
                                <li className="px-4 py-2 bg-gray-50 border-b">
                                  <span className="text-sm font-semibold text-gray-700">
                                    Universities in {country.name}
                                  </span>
                                </li>
                                {country.children.map((uni, ui) => (
                                  <li key={ui}>
                                    <Link
                                      to={uni.path}
                                      className="block px-6 py-3 text-white text-sm"
                                    >
                                      {uni.name}
                                    </Link>
                                  </li>
                                ))}
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

          {/* Call Now Button */}
          <div className="hidden lg:block">
            <a
              href={`tel:${navbarData.callNow.phone}`}
              className="bg-gray-900 text-[#4ccedc] font-semibold rounded-full py-4 px-10 hover:bg-gray-700 transition-colors flex items-center"
            >
              <i className="ri-phone-fill mr-2"></i>
              {navbarData.callNow.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={toggleMenu}>
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
                      className="text-white hover:text-gray-200 block py-3 px-3 rounded-lg hover:bg-[#383838] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <details className="text-white">
                      <summary className="cursor-pointer py-3 px-3 hover:text-gray-200 hover:bg-[#383838] rounded-lg transition-colors list-none">
                        <span className="flex items-center justify-between">
                          <span className="font-medium">{item.name}</span>
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
                      <ul className="mt-2 space-y-1 bg-[#1a1a1a] rounded-lg p-2 border border-gray-700">
                        {item.children.map((country, ci) => (
                          <li key={ci}>
                            <details>
                              <summary className="cursor-pointer py-2 px-3 text-gray-300 hover:text-white hover:bg-[#383838] rounded transition-colors list-none">
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
                              <ul className="mt-1 space-y-1 max-h-40 overflow-y-auto bg-[#0f0f0f] rounded p-2 border border-gray-800">
                                {country.children.map((uni, ui) => (
                                  <li key={ui}>
                                    <Link
                                      to={uni.path}
                                      className=" py-2 px-3 text-gray-400 hover:text-white hover:bg-[#383838] transition-colors text-sm rounded flex items-center"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      <svg
                                        className="w-3 h-3 mr-2 text-gray-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
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
                  className="bg-white text-[#242424] font-semibold rounded-lg py-3 px-4 hover:bg-gray-100 transition-colors flex items-center justify-center w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-phone-fill mr-2"></i>
                  {navbarData.callNow.label}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
