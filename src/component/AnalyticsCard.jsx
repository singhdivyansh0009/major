import React, { useState } from 'react';

const AnalyticsCard = () => {
  const earlyCheckouts = 1;
  const lateCheckins = 2;
  const onTime = 10;

  return (
    <>
      {/* Analytics Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-200">
          <p className="text-lg font-bold text-red-500">{earlyCheckouts}</p>
          <p className="text-gray-500 text-sm">Early Checkouts</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-200">
          <p className="text-lg font-bold text-yellow-500">{lateCheckins}</p>
          <p className="text-gray-500 text-sm">Late Check-ins</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-4 text-center border border-gray-200">
          <p className="text-lg font-bold text-green-500">{onTime}</p>
          <p className="text-gray-500 text-sm">On-Time</p>
        </div>
      </div>
    </>
  );
};

export default AnalyticsCard;
