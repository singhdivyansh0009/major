import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdGpsFixed, MdOutlineAccessTime } from "react-icons/md";
import Footer from "../component/Footer";
const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="flex bg-white border-b border-b-gray-200 justify-between items-center p-5">
        <p className="text-2xl font-semibold text-black">Admin Panel</p>
        <p className="text-red-500 font-semibold cursor-pointer">Logout</p>
      </div>

      {/* Admin Dashboard Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 gap-y-10 mt-24 p-5 bg-grid-pattern">
        {/* Faculty Attendance */}
        <div className="flex flex-col gap-y-4 text-center bg-white border border-gray-200 items-center shadow-md w-fit p-5 rounded-md">
          <div className="bg-blue-100 w-fit p-5 rounded-xl shadow-md">
            <FaChalkboardTeacher size={30} className="text-blue-600" />
          </div>
          <p className="font-semibold">Faculty Attendance</p>
        </div>

        {/* Manage Geofence */}
        <div className="flex flex-col gap-y-4 text-center bg-white border border-gray-200 items-center shadow-md w-fit p-5 rounded-md">
          <div className="bg-green-100 w-fit p-5 rounded-xl shadow-md">
            <MdGpsFixed size={30} className="text-green-600" />
          </div>
          <p className="font-semibold">Manage Geofence</p>
        </div>

        {/* Check-In / Check-Out Timing */}
        <div className="flex flex-col gap-y-4 text-center bg-white border border-gray-200 items-center shadow-md w-fit p-5 rounded-md">
          <div className="bg-yellow-100 w-fit p-5 rounded-xl shadow-md">
            <MdOutlineAccessTime size={30} className="text-yellow-600" />
          </div>
          <p className="font-semibold">Check-In / Check-Out Timing</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Admin;
