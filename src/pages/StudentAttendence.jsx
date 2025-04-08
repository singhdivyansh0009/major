import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Footer from "../component/Footer";

const StudentAttendance = () => {
  const students = [
    { name: "Mr. XYZ", course: "CSE", total: 150, percentage: 76 },
    { name: "Mr. ABC", course: "IT", total: 160, percentage: 82 },
    { name: "Ms. PQR", course: "ECE", total: 140, percentage: 89 },
    { name: "Mr. LMN", course: "MECH", total: 155, percentage: 74 },
    { name: "Ms. DEF", course: "CIVIL", total: 145, percentage: 80 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
        <h1 className="text-lg md:text-xl font-bold">Student Attendance</h1>
        <FaSignOutAlt className="text-red-500 text-xl cursor-pointer" />
      </div>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search Student..."
        className="w-full max-w-2xl p-2 border rounded-lg text-sm focus:outline-none shadow-sm"
      />

      {/* Attendance List */}
      <div className="w-full max-w-2xl space-y-4 mt-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-md md:flex-row flex-col"
          >
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-3 md:mb-0 md:mr-3"></div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-base font-semibold">{student.name}</h2>
              <p className="text-sm text-gray-500">{student.course}</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-semibold">Total: {student.total}</p>
              <p className="text-sm font-semibold text-blue-500">
                {student.percentage}%
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StudentAttendance;
