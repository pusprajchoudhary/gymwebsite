import React from "react";
import { IoBarbell, IoFitness, IoHeart } from "react-icons/io5"; // Gym Icons
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"; // Social Media Icons
import { FaMedal, FaCertificate, FaUsers, FaThumbsUp } from "react-icons/fa"; // Stats Icons

const Banner = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-start">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/1.mp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-20 text-white w-full lg:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-center lg:text-left leading-tight">
          Elevate Your <span className="text-yellow-500">Workout</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-center lg:text-left">
          Unlock your full potential with our world-class training and community. Join us and start your fitness journey today.
        </p>

        {/* Gym Related Icons */}
        <div className="flex justify-center lg:justify-start space-x-6 mb-6">
          <IoBarbell className="text-yellow-500 w-12 h-12" />
          <IoFitness className="text-red-500 w-12 h-12" />
          <IoHeart className="text-blue-500 w-12 h-12" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start space-x-4 mb-6">
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-lg transition duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold rounded-lg transition duration-300">
            Learn More
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center lg:justify-start space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-3xl">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-3xl">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 text-3xl">
            <FaYoutube />
          </a>
        </div>

      {/* Statistics Section - Horizontal Layout */}
{/*<div className="flex flex-wrap justify-center lg:justify-between text-white text-center mt-6 gap-8">
  <div className="flex flex-col items-center w-40">
    <FaMedal className="text-yellow-500 text-4xl mb-2" />
    <p className="text-lg font-semibold">5+ Years of Service</p>
  </div>
  <div className="flex flex-col items-center w-40">
    <FaCertificate className="text-yellow-500 text-4xl mb-2" />
    <p className="text-lg font-semibold">50+ Certified Trainers</p>
  </div>
  <div className="flex flex-col items-center w-40">
    <FaUsers className="text-yellow-500 text-4xl mb-2" />
    <p className="text-lg font-semibold">1000+ Happy Members</p>
  </div>
  <div className="flex flex-col items-center w-40">
    <FaThumbsUp className="text-yellow-500 text-4xl mb-2" />
    <p className="text-lg font-semibold">95% Customer Satisfaction</p>
  </div>
</div>*/}


      </div>
    </div>
  );
};

export default Banner;
