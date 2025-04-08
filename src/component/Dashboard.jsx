import React from "react";
import { SlCalender } from "react-icons/sl";
import { TbReportAnalytics } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex bg-white border-b border-b-gray-200 justify-between items-center p-5">
        <p className="text-lg md:text-2xl font-semibold text-black">Dashboard</p>
        <p className="text-red-500 font-semibold cursor-pointer">Logout</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 p-5">
        {/* Daily Attendance */}
        <div className="flex flex-col gap-y-4 text-center bg-white border border-gray-200 items-center shadow-md w-full md:w-auto p-5 rounded-md">
          <div className="bg-pink-100 p-5 rounded-xl shadow-md">
            <SlCalender className="text-2xl md:text-3xl" />
          </div>
          <p className="font-semibold text-sm md:text-base">Daily Attendance</p>
        </div>

        {/* Analytics */}
        <div className="flex flex-col gap-y-4 bg-white border border-gray-200 items-center shadow-md w-full md:w-auto p-5 rounded-md">
          <div className="bg-pink-100 p-5 rounded-xl shadow-md">
            <TbReportAnalytics className="text-2xl md:text-3xl" />
          </div>
          <p className="font-semibold text-sm md:text-base">Analytics</p>
        </div>

        {/* Student Attendance */}
        <div className="flex flex-col gap-y-4 bg-white border border-gray-200
                       items-center text-center shadow-md w-full md:w-auto p-5 rounded-md cursor-pointer" 
                       onClick={() => navigate("/student-attendence")}
        >
          <div className="bg-pink-100 p-5 rounded-xl shadow-md">
            <PiStudentBold className="text-2xl md:text-3xl" />
          </div>
          <p className="font-semibold text-sm md:text-base">Student Attendance</p>
        </div>

        {/* Lecture Attendance */}
        <div className="flex flex-col gap-y-4 bg-white border border-gray-200 items-center text-center shadow-md w-full md:w-auto p-5 rounded-md">
          <div className="bg-pink-100 p-5 rounded-xl shadow-md">
            <SiGoogleclassroom className="text-2xl md:text-3xl" />
          </div>
          <p className="font-semibold text-sm md:text-base">Lecture Attendance</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
