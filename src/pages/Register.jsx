import React, { useState } from 'react';
import RegistrationForm from '../component/RegistrationForm';
import UploadProfile from '../component/UploadImage';
import axios from 'axios';;

const Register = () => {
  const [componentState, setComponentState] = useState('form');
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data); // Pass data to next step
    setComponentState('upload'); // Move to camera upload
  };

  const handleFinalRegister = (dataWithImage) => {
    const formData = new FormData();
    formData.append("username", dataWithImage.username);
    formData.append("name", dataWithImage.name);
    formData.append("email", dataWithImage.email);
    formData.append("password", dataWithImage.password);
    formData.append("imageData", dataWithImage.avatar); // captured image file

    axios.post('http://127.0.0.1:8000/register_user/', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      alert("Registration Successful");
    })
    .catch(err => {
      console.error(err);
      alert("Registration failed");
    });
  };

  return (
    <>
      {componentState === 'form' ? (
        <RegistrationForm changeComponent={handleFormSubmit} />
      ) : (
        <UploadProfile register={handleFinalRegister} data={userData} />
      )}
    </>
  );
};

export default Register;
