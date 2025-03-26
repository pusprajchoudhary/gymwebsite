import React, { useState } from "react";
import { FaPhone, FaInstagram, FaWhatsapp, FaStar } from "react-icons/fa";

const MeetOurTrainers = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">Meet Our Trainers</h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Trainer 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <video
            src="https://videos.pexels.com/video-files/5319745/5319745-uhd_1440_2560_25fps.mp4"
            className="w-[40%] md:w-[30%] h-[400px] rounded-lg object-cover"
            autoPlay
            loop
            muted
          />
          <div className="text-white text-lg md:w-[70%] md:ml-6 mt-4">
            <h3 className="text-2xl font-bold">Samrath Singh - Strength Coach</h3>
            <p className="text-gray-300 mt-6">With over 10 years of experience, Samrath Singh is a dedicated strength coach specializing in powerlifting, bodybuilding, and functional training. His passion for fitness helps clients achieve peak performance and build lasting strength.</p>
            <div className="flex items-center gap-4 mt-8">
              <a href="/hire" className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800">Hire Me</a>
              <div className="flex gap-3">
                <a href="/query" className="text-blue-500 text-2xl"><FaPhone /></a>
                <a href="/query" className="text-pink-500 text-2xl"><FaInstagram /></a>
                <a href="/query" className="text-green-500 text-2xl"><FaWhatsapp /></a>
              </div>
            </div>
            {/* Rating Section */}
            <div className="flex gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`text-xl cursor-pointer ${i < rating1 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setRating1(i + 1)} />
              ))}
            </div>
          </div>
        </div>

        {/* Trainer 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10">
          <video
            src="https://videos.pexels.com/video-files/5319439/5319439-uhd_1440_2560_25fps.mp4"
            className="w-[40%] md:w-[30%] h-[400px] rounded-lg object-cover"
            autoPlay
            loop
            muted
          />
          <div className="text-white text-lg md:w-[70%] md:mr-6 mt-4">
            <h3 className="text-2xl font-bold">Raghubir Bhalla - HIIT Specialist</h3>
            <p className="text-gray-300 mt-6">Raghubir Bhalla is a certified HIIT expert, helping clients burn fat and build endurance effectively through high-intensity training and dynamic workouts. She tailors each session to maximize results, ensuring progress for all fitness levels.</p>
            <div className="flex items-center gap-4 mt-8">
              <a href="/hire" className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800">Hire Me</a>
              <div className="flex gap-3">
                <a href="/query" className="text-blue-500 text-2xl"><FaPhone /></a>
                <a href="/query" className="text-pink-500 text-2xl"><FaInstagram /></a>
                <a href="/query" className="text-green-500 text-2xl"><FaWhatsapp /></a>
              </div>
            </div>
            {/* Rating Section */}
            <div className="flex gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`text-xl cursor-pointer ${i < rating2 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setRating2(i + 1)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTrainers;
