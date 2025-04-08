import { useEffect,useState} from "react";
import DailyAttendence from "../component/DailyAttendence";
import Footer from "../component/Footer";
import axios from "axios";

const Attendance = () =>{
  const [attendence, setAttendence] = useState([]);
  useEffect(()=>{
      axios.get("http://localhost:3000/api/v1/attendence/one-time",{withCredentials:true})
      .then((res) => {
        console.log("Attendence:", res.data);
        setAttendence(res.data);
      }).catch((error) => {
        console.error("Error getting attendence:", error);  
      });
  },[])
   return(
    <>
      <DailyAttendence attendence={attendence}/>
      <Footer/>
    </>  
   )
}

export default Attendance;