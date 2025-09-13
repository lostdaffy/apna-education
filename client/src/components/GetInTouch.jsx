import React from "react";

const GetInTouch = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-[#4ccedc44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#242424]">
              Get In <span className="text-[#4ccedc]">Touch</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your MBBS journey? Contact us today!
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#4ccedc] to-[#4ccedc]/70 mx-auto mt-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="h-full space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#242424]">
                  Let's Start Your Medical Career Journey
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                  We are here to guide you through every step of your MBBS admission process. From university selection to visa assistance, our expert team provides comprehensive support to make your medical education dreams come true.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  {/* Location */}
                  <div className="flex items-start p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#4ccedc] to-[#4ccedc]/70 rounded-full flex items-center justify-center">
                        <i className="ri-map-pin-fill text-white text-lg sm:text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1 sm:mb-2 text-[#242424] text-sm sm:text-base">
                        Our Office
                      </h6>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Shree Ram Place, 3rd Floor <br />
                        Sector 27, Noida – 201301 <br />
                        Near Sector 18 Metro Station, <br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#4ccedc] to-[#4ccedc]/70 rounded-full flex items-center justify-center">
                        <i className="ri-phone-fill text-white text-lg sm:text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1 sm:mb-2 text-[#242424] text-sm sm:text-base">
                        Call Us Now
                      </h6>
                      <p className="text-sm sm:text-base mb-0">
                        <a
                          href="tel:+919667601325"
                          className="text-[#4ccedc] font-semibold hover:text-[#242424] transition-colors"
                        >
                          +91 9667601325
                        </a>
                        <br />
                        <small className="text-gray-500 text-xs sm:text-sm">
                          <strong>Timings:</strong> 10:00 AM – 7:00 PM
                        </small>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#4ccedc] to-[#4ccedc]/70 rounded-full flex items-center justify-center">
                        <i className="ri-mail-fill text-white text-lg sm:text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1 sm:mb-2 text-[#242424] text-sm sm:text-base">
                        Email Address
                      </h6>
                      <p className="text-sm sm:text-base mb-0">
                        <a
                          href="mailto:apnaeducation00@gmail.com"
                          className="text-[#4ccedc] font-semibold hover:text-[#242424] transition-colors"
                        >
                          apnaeducation00@gmail.com
                        </a>
                        <br />
                        <small className="text-gray-500 text-xs sm:text-sm">
                          Get detailed information via email
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-xl h-full">
                <div className="text-center py-6 px-4 sm:px-6 rounded-t-xl">
                  <h4 className="font-bold mb-2 text-[#242424] text-lg sm:text-xl">
                    Start Your MBBS Journey
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-0">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <div className="p-6 sm:p-8">
                  <form action="https://api.web3forms.com/submit" method="POST">
                    {/* Web3Forms Access Key */}
                    <input
                      type="hidden"
                      name="access_key"
                      value="7a44d80a-3342-483d-8ca5-5431b1fd2b7c"
                    />

                    {/* Full Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 sm:mb-6">
                      <div>
                        <label htmlFor="name" className="block font-bold text-[#242424] mb-2 text-sm sm:text-base">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4ccedc] focus:outline-none transition-colors text-sm sm:text-base"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-bold text-[#242424] mb-2 text-sm sm:text-base">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4ccedc] focus:outline-none transition-colors text-sm sm:text-base"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4 sm:mb-6">
                      <label htmlFor="email" className="block font-bold text-[#242424] mb-2 text-sm sm:text-base">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4ccedc] focus:outline-none transition-colors text-sm sm:text-base"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-4 sm:mb-6">
                      <label htmlFor="message" className="block font-bold text-[#242424] mb-2 text-sm sm:text-base">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4ccedc] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                        placeholder="Tell us about your MBBS goals, preferred universities, or any specific questions..."
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#4ccedc] to-[#4ccedc]/70 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold text-sm sm:text-lg hover:from-[#4ccedc]/70 hover:to-[#4ccedc] transition-all duration-300 flex items-center justify-center"
                    >
                      <i className="ri-send-plane-fill mr-2"></i>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
