import HomeComponent from "../component/Home";
import Footer from "../component/Footer";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { IoIosAnalytics } from "react-icons/io";
import {useEffect,useState } from "react";


const Home = () => {
  
  const [location,setLocation] = useState({latitude:0,longitude:0});
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        
          setLocation({latitude,longitude});
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <HomeComponent location={location}/>
      <Footer/>
      {/* <div className="bg-gray-50 min-h-screen flex flex-col">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionize Attendance Management
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Manage attendance effortlessly with our geofencing-based system for
            real-time tracking.
          </p>
          <a
            href="#features"
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-lg font-semibold"
          >
            Learn More
          </a>
        </section>

        <section id="features" className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-6 rounded-full mb-4">
                <MdOutlineLocationOn className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Geofencing Technology
              </h3>
              <p>
                Automatically marks attendance when employees enter a predefined
                zone.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-6 rounded-full mb-4">
                <CiClock2 className="text-3xl text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-time Attendance
              </h3>
              <p>
                Track attendance in real-time without any manual intervention.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-6 rounded-full mb-4">
                <i className="text-3xl text-green-600">🔒</i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
              <p>
                Ensure the privacy of attendance data with high-level security
                protocols.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-6 rounded-full mb-4">
                <IoIosAnalytics className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Analytics Dashboard
              </h3>
              <p>
                Get insights and reports about attendance patterns and employee
                behavior.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src=""
                alt="Geofencing Illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Set Geofence Boundaries
              </h3>
              <p className="text-lg mb-4">
                Define specific locations where employees can mark their
                attendance when they arrive at work or during events.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Automatic Attendance Marking
              </h3>
              <p className="text-lg mb-4">
                As employees enter the geofenced area, attendance is
                automatically recorded in real-time.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Track and Analyze</h3>
              <p className="text-lg">
                Access detailed reports and analytics to better understand
                attendance patterns and improve workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-lg mb-8">
            Sign up now to get started with our geofencing attendance solution!
          </p>
          <a
            href="#signup"
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-lg font-semibold"
          >
            Get Started
          </a>
        </section>

        <footer className="bg-gray-800 text-white py-6 px-6 text-center">
          <p>&copy; 2025 Attendance Management System. All Rights Reserved.</p>
        </footer>
      </div> */}
    </>
  );
};
export default Home;
