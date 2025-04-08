import axios from "axios";
import LoginForm from "../component/LoginForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
const Login = () => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
  const handleLogin = (data) => {
    axios
      .post(`http://localhost:4000/api/v1/auth/login`, data,{withCredentials:true})
      .then((res) => {
        console.log(res);
        login(res.data.user);
        alert("login Successfull");
        navigate("/home");
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  };
  return (
    <div>
      <LoginForm login={handleLogin} />
    </div>
  );
};
export default Login;
