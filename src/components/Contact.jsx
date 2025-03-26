import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-gray-800 p-8 rounded-xl shadow-2xl text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-6 animate-pulse">Contact Us</h2>
        <p className="text-gray-400 text-center mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
          <input type="hidden" name="access_key" value="0ffc373f-1fc5-4599-b649-ffe8d3e14728" />
          <motion.input
            whileFocus={{ scale: 1.1 }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none text-white"
          />
          <motion.input
            whileFocus={{ scale: 1.1 }}
            type="text"
            name="contact"
            placeholder="Your Contact"
            required
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none text-white"
          />
          <motion.input
            whileFocus={{ scale: 1.1 }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none text-white"
          />
          <motion.textarea
            whileFocus={{ scale: 1.1 }}
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none text-white"
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-lg text-xl font-semibold hover:bg-blue-500 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
