import React from "react";
import { FaDumbbell, FaTrophy, FaUsers, FaHeartbeat } from "react-icons/fa";

const Wcu = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Why Choose Us
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Discover why we stand out with quality, commitment, and results.
        </p>
      </div>

      {/* Content Layout - Vertical Sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Feature 1 */}
        <div className="text-center">
          <FaDumbbell className="text-yellow-500 text-5xl mx-auto mb-3" />
          <h3 className="text-2xl font-bold">Expert Trainers</h3>
          <p className="text-gray-300">Highly qualified trainers to help you achieve your goals.</p>
          <img src="/awards.jpg" alt="Workout" className="rounded-lg object-cover w-full h-[250px] mt-4 hover:scale-105 transition-all" />
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <FaTrophy className="text-yellow-500 text-5xl mx-auto mb-3" />
          <h3 className="text-2xl font-bold">Award Winning</h3>
          <p className="text-gray-300">Recognized for excellence in fitness services.</p>
          <img src="/awards.jpg" alt="Training" className="rounded-lg object-cover w-full h-[250px] mt-4 hover:scale-105 transition-all" />
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <FaHeartbeat className="text-yellow-500 text-5xl mx-auto mb-3" />
          <h3 className="text-2xl font-bold">Modern Equipment</h3>
          <p className="text-gray-300">Access to state-of-the-art fitness machines and tools.</p>
          <img src="/Wcu1.jpg" alt="Gym" className="rounded-lg object-cover w-full h-[250px] mt-4 hover:scale-105 transition-all" />
        </div>

        {/* Feature 4 */}
        <div className="text-center">
          <FaUsers className="text-yellow-500 text-5xl mx-auto mb-3" />
          <h3 className="text-2xl font-bold">Community Driven</h3>
          <p className="text-gray-300">A supportive community that motivates you.</p>
          <img src="/community.jpg" alt="Community" className="rounded-lg object-cover w-full h-[250px] mt-4 hover:scale-105 transition-all" />
        </div>
      </div>
    </section>
  );
};

export default Wcu;
