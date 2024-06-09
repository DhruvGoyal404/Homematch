import React, { useState, useEffect } from 'react';
import image from '../assets/ref.jpeg';
import logo from '../assets/logo.jpeg';
import file from '../assets/app.apk';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { useAuth } from '../components/Auth'; // Import the useAuth hook

const Content = () => {
  const { user } = useAuth(); // Get the user object from the AuthContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate(); // Get the navigation function from react-router-dom

  // Update login status when user changes
  useEffect(() => {
    setIsLoggedIn(user !== null);
  }, [user]);

  // Function to handle download button click
  const handleDownload = () => {
    // Check if the user is logged in
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      navigate('/login');
    } else {
      // If logged in, initiate download
      // This could involve showing a modal or directly starting the download
    }
  };

  return (
    <div className="flex flex-col items-center pt-12 font-bold text-xl relative bg-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">WELCOME!</h2>
      <h3 className="text-4xl font-extrabold text-blue-600 mb-4 text-center">WE ARE HOME MATCH!</h3>
      <p className="text-lg text-yellow-700 text-center mb-6 max-w-3xl">
        Home Match is dedicated to providing you with the best platform to find your perfect home. Our innovative app simplifies the process of home searching, ensuring you have access to the best listings and the latest information. Join us on this journey and download our app to explore our creation!
      </p>
      <br/>
      <div className="flex flex-col md:flex-row w-full justify-around mb-12">
        <div className="flex flex-col items-center w-full md:w-1/2 px-4">
          <p className="text-sm md:text-base text-gray-600 text-center mb-6 font-arial">
            You can download our app to explore our creation!
          </p>
          {/* Check login status before rendering the download button */}
          {isLoggedIn ? (
            <a href={file} download="app.apk" className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded mb-6" onClick={handleDownload}>
              Download Here!
            </a>
          ) : (
            <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded mb-6" onClick={handleDownload}>
              Download Here!
            </button>
          )}
          <img src={image} alt="App Preview" className="w-full h-auto"/>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 px-4 mt-8 md:mt-0">
          <p className="text-sm md:text-base text-gray-600 text-center mb-6 font-arial">
            This is our logo
          </p>
          <img src={logo} alt="Our Logo" className="w-1/2 h-auto"/>
        </div>
      </div>
      <hr className="w-full border-gray-300 mb-12"/>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center w-full px-4 mb-6">
          <p className="text-xs md:text-sm text-center text-[#69908c] font-roboto"> 
            HomeMatch Group is committed to ensuring digital accessibility for individuals. We are continuously working to improve the accessibility of our web and app experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please inform us at homematch@gmail.com 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
