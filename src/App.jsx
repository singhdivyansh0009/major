import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Attendance from "./pages/Attendence";
import Dashboard from "./component/Dashboard";
import StudentAttendance from "./pages/StudentAttendence";
import Admin from "./pages/Admin";
import WebCam from "./component/WebCam";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/attendence" element={<Attendance />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-attendence" element={<StudentAttendance />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/webcam" element={<WebCam />} />
      </Routes>
      
    </div>
  );
}

export default App;
