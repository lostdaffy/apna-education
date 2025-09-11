import React from "react";

const GetInTouch = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#242424]">
              Get In <span className="text-gray-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to start your MBBS journey? Contact us today!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#242424] to-gray-600 mx-auto mt-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="h-full">
                <h3 className="text-3xl font-bold mb-4 text-[#242424]">
                  Let's Start Your Medical Career Journey
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We are here to guide you through every step of your MBBS
                  admission process. From university selection to visa
                  assistance, our expert team provides comprehensive support to
                  make your medical education dreams come true.
                </p>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-15 h-15 bg-gradient-to-br from-[#242424] to-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-map-pin-fill text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2 text-[#242424]">
                        Our Office
                      </h6>
                      <p className="text-gray-600 mb-0">
                        Shree Ram Place, 3rd Floor <br />
                        Sector 27, Noida – 201301 <br />
                        Near Sector 18 Metro Station, <br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-15 h-15 bg-gradient-to-br from-[#242424] to-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-phone-fill text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2 text-[#242424]">
                        Call Us Now
                      </h6>
                      <p className="mb-0">
                        <a
                          href="tel:+919667601325"
                          className="text-[#242424] font-semibold text-lg hover:text-gray-600 transition-colors"
                        >
                          +91 9667601325
                        </a>
                        <br />
                        <small className="text-gray-500">
                          <strong>Timings:</strong> 10:00 AM – 7:00 PM
                        </small>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="mr-4">
                      <div className="w-15 h-15 bg-gradient-to-br from-[#242424] to-gray-700 rounded-full flex items-center justify-center">
                        <i className="ri-mail-fill text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2 text-[#242424]">
                        Email Address
                      </h6>
                      <p className="mb-0">
                        <a
                          href="mailto:apnaeducation00@gmail.com"
                          className="text-[#242424] font-semibold hover:text-gray-600 transition-colors"
                        >
                          apnaeducation00@gmail.com
                        </a>
                        <br />
                        <small className="text-gray-500">
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
                <div className="bg-white border-0 text-center py-6 px-6 rounded-t-xl">
                  <h4 className="font-bold mb-2 text-[#242424] text-xl">
                    Start Your MBBS Journey
                  </h4>
                  <p className="text-gray-600 mb-0">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <div className="p-8">
                  <form action="https://api.web3forms.com/submit" method="POST">
                    {/* Web3Forms Access Key */}
                    <input
                      type="hidden"
                      name="access_key"
                      value="7a44d80a-3342-483d-8ca5-5431b1fd2b7c"
                    />

                    {/* Full Name + Phone in One Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-bold text-[#242424] mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#242424] focus:outline-none transition-colors"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-bold text-[#242424] mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#242424] focus:outline-none transition-colors"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block font-bold text-[#242424] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#242424] focus:outline-none transition-colors"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block font-bold text-[#242424] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#242424] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your MBBS goals, preferred universities, or any specific questions..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#242424] to-gray-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-gray-700 hover:to-[#242424] transition-all duration-300 flex items-center justify-center"
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
