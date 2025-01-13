// MY BEAUTIFUL  FOOTER PAGE 

import React from "react";
import Link from "next/link";
import {  FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-green-600 via-teal-600 to-green-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-xl font-bold mb-4 md:mb-0">Stay Connected</h2>
          <div className="flex space-x-4">
           
            {/* GITHUB */}
            <Link
              href="https://github.com/areeba-awan"
              target="_blank"
              className="hover:text-green-400 transition duration-200"
              aria-label="Github"
            >
              <FaGithub size={24} />
            </Link>
           
            
            {/* EMAIL */}
            <Link
              href="https://awanareba40@gmail.com"
              target="_blank"
              className="hover:text-green-400 transition duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </Link>

              {/* LINKEDIN */}
            <Link
              href="https://www.linkedin.com/in/areeba-awan%F0%9F%A7%95%F0%9F%8F%BB-5269942b5/"
              target="_blank"
              className="hover:text-green-400 transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        <div className="border-t border-green-100 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Blogify.com | Designed by Areeba Awan.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/"
              className="hover:text-green-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-green-400 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:text-green-400 transition duration-200"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-400 transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;