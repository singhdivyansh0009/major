import React, { useState, useRef } from 'react';
import { base64ToFile } from '../utils';
import axios from 'axios';

const WebCam = () => {
  const [data, setData] = useState({
    username: 'divyansh',  // Replace with actual username
    imageData: null,
  });
  const [image, setImage] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = userStream;
        setCameraActive(true);
        setStream(userStream);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setCameraActive(false);
    }
  };

  // function to call authentication of image 
  const SendForVerifiaction = async () => {
    // console.log(data);
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('imageData', data.imageData);
    console.log('Sending image for verification:', formData);
        axios.post('', formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log('Image verification response:', response.data);
            // Handle the response from the server
        }).catch((error) => {
            console.error('Error sending image for verification:', error);
            // Handle the error
        });
    }
    
  const captureImage = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const img = canvas.toDataURL('image/png');
      setImage(img);
      setData({ ...data, imageData: base64ToFile(img, data.username) });
      stopCamera();

      const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
      let totalBrightness = 0;
      for (let i = 0; i < imgData.data.length; i += 4) {
        const r = imgData.data[i];
        const g = imgData.data[i + 1];
        const b = imgData.data[i + 2];
        const brightness = (r + g + b) / 3;
        totalBrightness += brightness;
      }
      const avgBrightness = totalBrightness / (imgData.data.length / 4);
      if (avgBrightness < 50 || avgBrightness > 200) {
        alert('Image may not be clear. Please try again in better lighting.');
      }
      // if everything is fine, you can proceed with the image
      await SendForVerifiaction();
    }
  };

  const handleRecapture = () => {
    setImage(null);
    startCamera();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <h1 className="text-2xl font-bold mb-4">{data.username} Click clear photo</h1>
      <div className="relative w-64 h-64 border-4 border-gray-400 shadow-lg flex items-center justify-center mb-6">
        {image ? (
          <img src={image} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center">
            <video ref={videoRef} autoPlay className="w-64 h-64 mb-4" />
            {!cameraActive && (
              <button onClick={startCamera} className="mb-2 px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">Start Camera</button>
            )}
            {cameraActive && (
              <button onClick={captureImage} className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Capture Image</button>
            )}
          </div>
        )}
      </div>
      <canvas ref={canvasRef} className="hidden" />
      {image && (
        <button onClick={handleRecapture} className="mb-4 px-5 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition">Re-Capture Image</button>
      )}
    </div>
  );
};

export default WebCam;
