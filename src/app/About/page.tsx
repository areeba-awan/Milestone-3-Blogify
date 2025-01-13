import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
// This is my about page where i have done all work related to my blog
const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200  pt-24">
      <Navbar />
        {/* This is the main div of about us page */}
      <main className="flex-1 flex flex-col items-center p-4 sm:p-12 sm:px-12 sm:py-16">
        <div className="text-center sm:text-left mb-6 sm:mb-12 max-w-3xl px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center text-gray-800 mb-6">
            About Us
          </h1>
            {/* paragraph portion*/}
          <p className="text-sm sm:text-base md:text-xl text-gray-900 text-left mb-4 sm:mb-6 leading-tight font-light">
      
         Welcome to Blogify celebration of Pakistan's stunning natural beauty! Here, I share my love for the country's diverse landscapes, from towering mountain ranges to vast deserts, lush valleys, and serene coastlines.This blog is your gateway to discovering Pakistan's rich ecological heritage, unique wildlife, and hidden gems. </p>
          <p className="text-sm sm:text-base md:text-xl text-gray-900 mb-4 text-left sm:mb-6 leading-tight md:leading-relaxed font-light">
          Join me on this journey as we explore the wonders of Pakistan, one breathtaking view at a time. Let's embark on an adventure that promises to leave you awestruck and longing for more.


          </p>
        </div>
       {/* image portion*/}
        <div className="relative w-56 h-36 sm:w-44 sm:h-24 md:w-72 md:h-44 lg:w-96 lg:h-64 hover:shadow-lg hover:shadow-green-400 transition-shadow duration-300">
          <Image
            src="/images/team.jpg"
            alt="About Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
          {/* Linking portion */}
        <Link
          href="/blog"
          className="inline-block bg-teal-600 text-white mt-10 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm lg:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110 focus:ring-4 focus:ring-green-400"
        >
          View Latest Blogs
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default About;