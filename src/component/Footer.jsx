import { FaHome, FaThLarge, FaCalendarAlt } from 'react-icons/fa';
import { useLocation,useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to determine if the path is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-auto flex justify-around bg-red-500 text-white py-3 rounded-full shadow-xl"
      style={{ maxWidth: '420px' }}
    >
      {/* Home */}
      <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/home')}>
        <FaHome className={`text-xl ${isActive('/home') ? 'text-yellow-200' : 'text-white'}`} />
        <span className={`text-xs ${isActive('/home') ? 'text-yellow-200' : 'text-white'}`}>HOME</span>
      </div>

      {/* Dashboard */}
      <div className="flex flex-col items-center cursor-pointer"  onClick={() => navigate('/dashboard')}>
        <FaThLarge className={`text-xl ${isActive('/dashboard') ? 'text-yellow-300' : 'text-white'}`} />
        <span className={`text-xs ${isActive('/dashboard') ? 'text-yellow-300' : 'text-white'}`}>DASHBOARD</span>
      </div>

      {/* Attendance */}
      <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/attendence')}>
        <FaCalendarAlt className={`text-xl ${isActive('/attendance') ? 'text-yellow-300' : 'text-white'}`} />
        <span className={`text-xs ${isActive('/attendance') ? 'text-yellow-300' : 'text-white'}`}>ATTENDANCE</span>
      </div>
    </div>
  );
};

export default Footer;
