import React, { useState } from 'react';
import AnalyticsCard from './AnalyticsCard';

const DailyAttendence = (attendence) => {
   console.log(attendence)
  const days = [
    { date: '01', day: 'SAT', punchIn: '09:05 AM', punchOut: '05:55 PM', total: '08:50', color: 'bg-green-500' },
    { date: '02', day: 'SUN', punchIn: '09:10 AM', punchOut: '06:00 PM', total: '08:50', color: 'bg-green-500' },
    { date: '03', day: 'MON', punchIn: '09:15 AM', punchOut: '06:05 PM', total: '08:50', color: 'bg-yellow-500' },
    { date: '04', day: 'TUE', punchIn: '09:20 AM', punchOut: '06:10 PM', total: '08:50', color: 'bg-yellow-500' },
    { date: '05', day: 'WED', punchIn: '09:25 AM', punchOut: '06:15 PM', total: '08:50', color: 'bg-red-500' },
    { date: '06', day: 'THU', punchIn: '09:30 AM', punchOut: '06:20 PM', total: '08:50', color: 'bg-red-500' },
    { date: '07', day: 'FRI', punchIn: '09:35 AM', punchOut: '06:25 PM', total: '08:50', color: 'bg-yellow-500' },
    { date: '08', day: 'SAT', punchIn: '09:40 AM', punchOut: '06:30 PM', total: '08:50', color: 'bg-yellow-500' },
    { date: '09', day: 'SUN', punchIn: '09:45 AM', punchOut: '06:35 PM', total: '08:50', color: 'bg-red-500' },
    { date: '10', day: 'MON', punchIn: '09:50 AM', punchOut: '06:40 PM', total: '08:50', color: 'bg-green-500' },
    { date: '11', day: 'TUE', punchIn: '09:55 AM', punchOut: '06:45 PM', total: '08:50', color: 'bg-red-500' },
    { date: '12', day: 'WED', punchIn: '10:00 AM', punchOut: '06:50 PM', total: '08:50', color: 'bg-green-500' },
    { date: '13', day: 'THU', punchIn: '10:05 AM', punchOut: '06:55 PM', total: '08:50', color: 'bg-red-500' },
    { date: '14', day: 'FRI', punchIn: '10:10 AM', punchOut: '07:00 PM', total: '08:50', color: 'bg-red-500' },
    { date: '15', day: 'SAT', punchIn: '10:15 AM', punchOut: '07:05 PM', total: '08:50', color: 'bg-red-500' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center max-w-md mx-auto" style={{ maxWidth: '420px' }}>
      {/* Header */}
      <h2 className="text-xl font-bold mb-4 self-start">Attendance History</h2>
      {/*Analytics Card*/}
      <AnalyticsCard/>
      {/* Attendance Records */}
      <div className="w-full flex flex-col gap-3 mb-16">
        {days.map((day) => (
          <div
            key={day.date}
            className="flex items-center bg-white shadow-md rounded-lg p-3"
          >
            <div
              className={`w-12 h-12 ${day.color} text-white flex flex-col items-center justify-center rounded-md mr-4`}
            >
              <span className="text-lg font-bold">{day.date}</span>
              <span className="text-xs">{day.day}</span>
            </div>
            <div className="flex-1 flex justify-between text-sm">
              <div>
                <p className="font-semibold">{day.punchIn}</p>
                <p className="text-gray-500">Punch In</p>
              </div>
              <div>
                <p className="font-semibold">{day.punchOut}</p>
                <p className="text-gray-500">Punch Out</p>
              </div>
              <div>
                <p className="font-semibold">{day.total}</p>
                <p className="text-gray-500">Total Hours</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyAttendence;
