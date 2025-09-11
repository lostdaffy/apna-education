import React from "react";
import { useParams } from "react-router-dom";
import { universities } from "../data/Data";
import HeroSection from "../components/HeroSection";

const UniversityDetails = () => {
  const { id } = useParams();
  const university = universities.find((u) => u.id === id);

  if (!university) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            University not found
          </h2>
          <p className="text-red-500">
            The requested university could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection title={university.name} highlight="" />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#242424] mb-3 tracking-tight">
            {university.name}
          </h1>
          <div className="inline-flex items-center px-4 py-2 bg-[#242424] text-white rounded-full text-sm font-medium">
            {university.type}
          </div>
        </div>

        {/* University Image */}
        {university.imageUrl && (
          <div className="text-center mb-10">
            <div className="relative inline-block">
              <img
                src={university.imageUrl}
                alt={university.name}
                className="mx-auto rounded-xl shadow-lg max-h-80 w-auto object-contain border border-gray-200"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* General Information */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="bg-[#242424] px-6 py-4">
                <h2 className="text-xl font-semibold text-white">
                  General Information
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        University Type
                      </label>
                      <p className="text-[#242424] font-medium">
                        {university.type}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Established
                      </label>
                      <p className="text-[#242424] font-medium">
                        {university.established}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">
                        Established
                      </label>
                      <p className="text-[#242424] font-medium">
                        {university.students}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Accreditation
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {university.accreditation?.map((acc, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-[#242424] text-sm rounded-full"
                        >
                          {acc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs & Facilities Container */}
            <div className="space-y-6">
              {/* Academic Programs */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#242424] to-[#383838] px-6 py-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      Academic Programs
                    </h2>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Level
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Program
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {university.programs?.map((p, i) => (
                        <tr
                          key={i}
                          className="hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                p.level === "Bachelor"
                                  ? "bg-blue-100 text-blue-800"
                                  : p.level === "Master"
                                  ? "bg-green-100 text-green-800"
                                  : p.level === "PhD"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {p.level}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-[#242424] font-semibold text-sm">
                              {p.name}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1 text-gray-600 text-sm">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {p.durationYears}{" "}
                              {p.durationYears === 1 ? "year" : "years"}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Empty state if no programs */}
                {(!university.programs || university.programs.length === 0) && (
                  <div className="px-6 py-12 text-center">
                    <div className="text-gray-400 mb-2">
                      <svg
                        className="mx-auto h-12 w-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">
                      No programs available at this time
                    </p>
                  </div>
                )}
              </div>

              {/* Facilities */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#242424] to-[#383838] px-6 py-5">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Facilities
                  </h2>
                </div>

                <div className="p-6">
                  {university.facility ? (
                    <div className="space-y-4">
                      {/* If facility is a string, display it nicely */}
                      {typeof university.facility === "string" ? (
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#242424]">
                          <p className="text-gray-700 leading-relaxed">
                            {university.facility}
                          </p>
                        </div>
                      ) : (
                        /* If facility is an array or object, you can map through it */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {Array.isArray(university.facility) ? (
                            university.facility.map((facility, index) => (
                              <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="p-2 bg-[#242424] rounded-lg">
                                    <svg
                                      className="w-4 h-4 text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-[#242424] text-sm">
                                      {facility.name || facility}
                                    </h3>
                                    {facility.description && (
                                      <p className="text-xs text-gray-600 mt-1">
                                        {facility.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="col-span-full bg-gray-50 rounded-lg p-4">
                              <p className="text-gray-700">
                                {university.facility}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Empty state for facilities */
                    <div className="text-center py-12">
                      <div className="text-gray-400 mb-2">
                        <svg
                          className="mx-auto h-12 w-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">
                        No facility information available
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Campus Facilities */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="bg-[#242424] px-6 py-4">
                <h2 className="text-xl font-semibold text-white">
                  Campus Facilities
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-3">
                  {university.facilities?.map((facility, i) => (
                    <div
                      key={i}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-[#242424] rounded-full mr-3"></div>
                      <span className="text-[#242424]">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admissions */}
            {university.admissions && (
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#242424] px-6 py-4">
                  <h2 className="text-xl font-semibold text-white">
                    Admissions
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {university.admissions.requirements && (
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">
                        Requirements
                      </label>
                      <div className="space-y-2">
                        {university.admissions.requirements.map((req, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#242424] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-[#242424] text-sm">
                              {req}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {university.admissions.applicationWindow && (
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">
                        Application Window
                      </label>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-[#242424] font-medium">
                          {university.admissions.applicationWindow.start} →{" "}
                          {university.admissions.applicationWindow.end}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityDetails;
