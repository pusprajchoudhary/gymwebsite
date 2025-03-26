import React, { useState } from "react";
import { Link } from "react-scroll"; // Use react-scroll for smooth scrolling
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { FaDumbbell } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl font-bold text-white font-[Caveat]"
        >
          Train-Gain
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center text-white font-semibold">
          <Link to="home" smooth={true} duration={500} className="flex items-center gap-2 hover:text-blue-500 transition-color duration-300 cursor-pointer">
            <FaHome />
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="flex items-center gap-2 hover:text-blue-500 transition-color duration-300 cursor-pointer">
            <FcAbout />
            About Us
          </Link>
          <Link to="pricing" smooth={true} duration={500} className="flex items-center gap-2 hover:text-blue-500 transition-color duration-300 cursor-pointer">
            <MdOutlinePriceChange />
            Pricing
          </Link>
          <Link to="contact" smooth={true} duration={500} className="flex items-center gap-2 hover:text-blue-500 transition-color duration-300 cursor-pointer">
            <AiOutlineContacts />
            Contact
          </Link>
          <Link to="trainers" smooth={true} duration={500} className="flex items-center gap-2 hover:text-blue-500 transition-color duration-300 cursor-pointer">
            <FaDumbbell />
            Trainers
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoMdCloseCircle size={30} /> : <GiHamburgerMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4">
          <Link to="home" smooth={true} duration={500} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="pricing" smooth={true} duration={500} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="trainers" smooth={true} duration={500} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
            Trainers
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
