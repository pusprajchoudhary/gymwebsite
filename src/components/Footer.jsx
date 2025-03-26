import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 animate-pulse">Stay Connected</h2>
        <p className="text-gray-400 mb-6">
          Follow us on social media and stay updated with our latest news and offers.
        </p>
        
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a whileHover={{ scale: 1.2 }} href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl">
            <FaFacebook />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl">
            <FaInstagram />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl">
            <FaTwitter />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-3xl">
            <FaLinkedin />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="mailto:contact@mywebsite.com" className="text-red-500 text-3xl">
            <FaEnvelope />
          </motion.a>
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <a href="/contact" className="bg-blue-600 text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-all">
            Contact Us
          </a>
        </motion.div>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-gray-500 text-center mt-10"
      >
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
