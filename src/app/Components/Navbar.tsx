"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

// NAVBAR OF BLOG

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-gradient-to-r from-green-600 via-teal-600 to-green-950 text-zinc-50 flex items-centers justify-between px-6 py-4 sm:px-8 shadow-lg fixed top-0 left-0 z-50 transition-all duration-300">
      <div className="text-3xl font-bold tracking-widest hover:scale-105 transform transition duration-200 cursor-pointer">
        <span className="text-white">
          <Link href="/">Blogify.</Link>
        </span>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 text-white bg-opacity-70 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className={`fixed inset-0 bg-gradient-to-r from-green-600 via-teal-600 to-green-950 flex flex-col justify-center items-center transform transition-transform duration-300 space-y-6 p-6 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-3xl text-white "
          >
            <AiOutlineClose />
          </button>
          <Link
            href="/"
            className="text-2xl font-bold text-white  hover:text-green-300 transform transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-2xl font-bold text-white  hover:text-green-300  transform transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-2xl font-bold text-white  hover:text-green-300 transform transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-bold text-white  hover:text-green-300 transform transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            Contact 
          </Link>
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex  space-x-14 items-center text-lg font-medium">
        <Link
          href="/"
          className="relative group text-white  hover:text-green-300 "
        >
          <span className="group-hover:text-green-300 ">Home</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5  bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
        
          href="/About"
          className="relative group text-white   hover:text-green-300"
        >
          <span className="group-hover:text-green-300">About</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5  bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          href="/blog"
          className="relative group text-white  hover:text-green-300"
        >
          <span className="group-hover:text-green-300">Blogs</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link
          href="/contact"
          className="relative group text-white  hover:text-green-300"
        >
          <span className="group-hover:text-green-300">Contact</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;