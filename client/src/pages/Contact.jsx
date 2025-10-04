import React from "react";
import HeroSection from "../components/HeroSection";
import GetInTouch from "../components/GetInTouch";

const Contact = () => {
  return (
    <>
      <HeroSection title="Contact" highlight="Apna Education" />
      
      <section className="py-20 my-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#242424]">
              Find <span className="text-[#1e73be]">Our Office</span>
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at our convenient location in Noida
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Map */}
            <div className="col-span-1 lg:col-span-8">
              <div className="map-container h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5692602981594!2d77.32450642528674!3d28.57152357569803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55ff23f0093%3A0x51332df6cfd25f60!2sShree%20Ram%20Palace!5e1!3m2!1sen!2sin!4v1756593968032!5m2!1sen!2sin"
                  className="w-full rounded-xl shadow-lg border-0"
                  height="400"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ApnaEducation Office Location"
                />
              </div>
            </div>

            {/* Location Details */}
            <div className="col-span-1 lg:col-span-4">
              <div className="h-full">
                <div className="bg-white rounded-xl shadow-sm border-0 h-full">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-18 h-18 mx-auto mb-4 bg-[#1e73be] rounded-full flex items-center justify-center">
                        <i className="ri-building-line text-white text-3xl"></i>
                      </div>
                      <h4 className="font-bold text-[#242424] text-xl">
                        Our Office Location
                      </h4>
                    </div>

                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start">
                        <i className="ri-map-pin-line text-[#1e73be] mr-4 mt-1 text-xl flex-shrink-0"></i>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">
                            Address:
                          </div>
                          <div className="text-gray-600 leading-relaxed">
                            Shree Ram Place, 3rd Floor
                            <br />
                            Sector 27, Noida – 201301
                            <br />
                            Uttar Pradesh, India
                          </div>
                        </div>
                      </div>

                      {/* Office Hours */}
                      <div className="flex items-start">
                        <i className="ri-time-line text-[#1e73be] mr-4 mt-1 text-xl flex-shrink-0"></i>
                        <div>
                          <div className="font-semibold mb-1">
                            Office Hours:
                          </div>
                          <div className="text-gray-600 leading-relaxed">
                            Monday - Saturday: 10:00 AM - 7:00 PM
                            <br />
                            Sunday: Closed
                          </div>
                        </div>
                      </div>

                      {/* Additional Contact Info */}
                      <div className="flex items-start">
                        <i className="ri-phone-line text-[#1e73be] mr-4 mt-1 text-xl flex-shrink-0"></i>
                        <div>
                          <div className="font-semibold ] mb-1">
                            Contact:
                          </div>
                          <div className="text-gray-600">
                            <a
                              href="tel:+919667601325"
                              className="text-[#242424] hover:text-gray-600 transition-colors font-medium"
                            >
                              +91 9667601325
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Directions Button */}
                      <div className="pt-4">
                        <a
                          href="https://www.google.com/maps/dir//Shree+Ram+Palace,+Sector+27,+Noida,+Uttar+Pradesh+201301/@28.57152357569803,77.32450642528674,16z"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#1e73be] text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
                        >
                          <i className="ri-navigation-line mr-2"></i>
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default Contact;
