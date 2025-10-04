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
        <div className="bg-red-50 border-l-4 border-red-400 p-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-8 w-8 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.19 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">
                University not found
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>The requested university could not be found.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection title={university.name} highlight="" />

      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {university.name}
          </h1>
          <div className="inline-flex items-center px-6 py-3 bg-[#1e73be] text-white rounded-full text-lg font-semibold shadow-lg">
            {university.type}
          </div>
        </div>

        {/* University Image */}
        {university.imageUrl && (
          <div className="text-center mb-16">
            <img
              src={university.imageUrl}
              alt={university.name}
              className="mx-auto rounded-lg shadow-xl w-full max-w-md h-64 object-cover"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        )}

        <div className="space-y-16">
          {/* General Info */}
          <section>
            <div className="border-l-4 border-[#1e73be] pl-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                General Information
              </h2>
              <p className="text-gray-600">
                Basic details about the university
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg grid md:grid-cols-3 gap-8">
              <div>
                <dt className="text-sm font-medium text-[#1e73be] uppercase tracking-wider mb-2">
                  University Type
                </dt>
                <dd className="text-xl font-semibold text-gray-900">
                  {university.type}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-[#1e73be] uppercase tracking-wider mb-2">
                  Established
                </dt>
                <dd className="text-xl font-semibold text-gray-900">
                  {university.established}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-[#1e73be] uppercase tracking-wider mb-2">
                  Students
                </dt>
                <dd className="text-xl font-semibold text-gray-900">
                  {university.students}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-[#1e73be] uppercase tracking-wider mb-2">
                  Country
                </dt>
                <dd className="text-xl font-semibold text-gray-900">
                  {university.address?.country || "-"}
                </dd>
              </div>
            </div>

            {/* Accreditation */}
            {university.accreditation &&
              university.accreditation.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <dt className="text-sm font-medium text-[#1e73be] uppercase tracking-wider mb-4">
                    Accreditation
                  </dt>
                  <dd className="flex flex-wrap gap-3">
                    {university.accreditation.map((acc, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-[#1e73be] text-white text-sm font-medium rounded-full"
                      >
                        {acc || "-"}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
          </section>

          {/* Academic Programs */}
          <section>
            <div className="border-l-4 border-[#1e73be] pl-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Academic Programs
              </h2>
              <p className="text-gray-600">
                Available degree programs and courses
              </p>
            </div>
            {university.programs && university.programs.length > 0 ? (
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Level
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Program Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {university.programs.map((p, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50 transition-colors duration-200"
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
                            {p.level || "-"}
                          </span>
                        </td>
                        <td className="px-6 py-4">{p.name || "-"}</td>
                        <td className="px-6 py-4">
                          {p.durationYears
                            ? `${p.durationYears} ${
                                p.durationYears === 1 ? "year" : "years"
                              }`
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="mt-4 text-gray-500">
                  No programs available at this time
                </p>
              </div>
            )}
          </section>

          {/* Facilities & Campus Facilities */}
          {["facility", "facilities"].map(
            (key) =>
              university[key] && (
                <section key={key}>
                  <div className="border-l-4 border-[#1e73be] pl-6 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {key === "facility" ? "Facilities" : "Campus Facilities"}
                    </h2>
                    <p className="text-gray-600">
                      {key === "facility"
                        ? "University infrastructure and amenities"
                        : "Available facilities on campus"}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-lg">
                    {Array.isArray(university[key]) &&
                    university[key].length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {university[key].map((item, i) =>
                          typeof item === "string" ? (
                            <div
                              key={i}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 bg-[#1e73be] rounded-full flex-shrink-0"></div>
                              <span className="text-gray-900 font-medium">
                                {item}
                              </span>
                            </div>
                          ) : (
                            <div key={i} className="flex items-start space-x-3">
                              <div className="flex-shrink-0">
                                <svg
                                  className="h-6 w-6 text-[#1e73be]"
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
                                <h3 className="font-semibold text-gray-900">
                                  {item.name || "-"}
                                </h3>
                                {item.description && (
                                  <p className="text-gray-600 text-sm mt-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <p className="text-gray-500">No information available</p>
                    )}
                  </div>
                </section>
              )
          )}

          {/* Admissions */}
          {university.admissions && (
            <section>
              <div className="border-l-4 border-[#1e73be] pl-6 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Admissions
                </h2>
                <p className="text-gray-600">
                  Application requirements and timeline
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg space-y-8">
                {university.admissions.requirements && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Requirements
                    </h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {university.admissions.requirements.map((req, i) => (
                        <li key={i}>{req || "-"}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {university.admissions.applicationWindow && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Application Window
                    </h3>
                    <div className="bg-white p-6 rounded-lg border-l-4 border-[#1e73be] text-center">
                      <span className="text-xl font-semibold text-gray-900">
                        {university.admissions.applicationWindow.start || "-"}
                      </span>
                      <span className="mx-4 text-[#1e73be] text-2xl">→</span>
                      <span className="text-xl font-semibold text-gray-900">
                        {university.admissions.applicationWindow.end || "-"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Rankings */}
          {university.rankings && (
            <section>
              <div className="border-l-4 border-[#1e73be] pl-6 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Rankings
                </h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg grid md:grid-cols-2 gap-8">
                <div>
                  <dt className="text-sm font-medium text-[#1e73be] uppercase tracking-wider mb-2">
                    National Ranking
                  </dt>
                  <dd className="text-xl font-semibold text-gray-900">
                    {university.rankings.national || "-"}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-[#1e73be] uppercase tracking-wider mb-2">
                    Global Ranking
                  </dt>
                  <dd className="text-xl font-semibold text-gray-900">
                    {university.rankings.global || "-"}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-[#1e73be] uppercase tracking-wider mb-2">
                    Source
                  </dt>
                  <dd className="text-xl font-semibold text-gray-900">
                    {university.rankings.source || "-"}
                  </dd>
                </div>
              </div>
            </section>
          )}

          {/* Notes */}
          {university.notes && (
            <section>
              <div className="border-l-4 border-[#1e73be] pl-6 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Notes</h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700">{university.notes}</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default UniversityDetails;
