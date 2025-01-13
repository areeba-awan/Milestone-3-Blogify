
"use client";
import Link from "next/link"; // link k liye use hoga
import Image from "next/image";  // image k liye use hoga 
import { useState } from "react";  // for the id's
import Navbar from "../Components/Navbar";   // for the navbar  
import Footer from "../Components/Footer";    // for footer page
  {/* make a new object in which i have put all the ids of my blogs */}
const articles = [
  {
    id: "1",  // for blog 1
    title: "Unveiling the Mystical Beauty of Neelum Valley", // name of blog
    image: "/images/neelum valley.jpeg", // image of blog 1
    summary:"The Best Place to visit and a true beauty of Pakistan.",  // summary of blog 1
  },
  {
    id: "2",   // for blog 2
    title: "Hidden Valley of Chitral, The Heavenly Kingdom", // name of blog
    image: "/images/chitral-valley.jpg", // summary of blog 2
    summary: "Chitral Valley: Nature's Serenity and Cultural Harmony in Pakistan's North.",  // summary of blog 2
  },
  {
    id: "3", // blog 3
    title: "Whispers of Kashmir: Tales from the Enchanted Valley", // name of blog 3
    image: "/images/kashmir.jpg", // image of blog 3
    summary: "Kashmir, often referred to as Paradise on Earth, is a region of stunning natural beauty.",
  },
  {
    id: "4",
    title: "The Enchanted Valleys: Naran and Kaghan",
    image: "/images/naran-kaghan-valley.jpeg",
    summary: "Naran and Kaghan Valley are renowned for their mesmerizing natural beauty, breathtaking landscapes, and serene environment",
   },
  {
    id: "5",
    title: "The Serene Beauty of Attabad Lake",
    image: "/images/attabad lake.jpg",
    summary:
      "Attabad Lake: The Turquoise Treasure of Hunza",
  },
  {
    id: "6",
    title: "Emerald Gem: Exploring Kachura Lake",
    image: "/images/kachura lake.jpeg",
    summary: "Kachura Lake, also known as Shangrila Lake, is a captivating natural wonder",
  },
  {
    id: "7",
    title: "Nathia Gali: The Jewel of the Galyat",
    image: "/images/nathia galli.jpg",
    summary:
      "Nathia Gali is a picturesque hill station that offers a perfect escape from the hustle and bustle of city life.",
  },
  {
    id: "8",
    title: "Pakistan Monument: A Tribute to Unity",
    image: "/images/blog 8.jpg",
    summary: "The Pakistan Monument symbolizes the unity and strength of the Pakistani people, representing the country's cultural diversity and rich heritage.",
  },
  {
    id: "9",
    title: "Faisal Mosque A Majestic Blend of Faith, Culture, and Architecture",
    image: "/images/blog 9.jpg",
    summary:
      "Faisal Mosque, nestled at the foothills of the Margalla Hills in Islamabad which is the largest mosque in Pakistan.",
  },
];

// FUnction and callback function is used here 
const ArticlesPage = () => {
  const [displayLimit, setDisplayLimit] = useState(6);   // hook is used 

  const showMoreArticles = () => {
    setDisplayLimit((currentLimit) => currentLimit + 6);
  };
      // Main Portion is here 
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-teal-100 to-teal-200 pt-20">
      <Navbar />
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 my-8">
       Discover latest Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10 md:p-16">
        {articles.slice(0, displayLimit).map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Link href={`/articles/${article.id}`}>
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30"></div>
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 hover:text-blue-600">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{article.summary}</p>
              <Link
                href={`/blog/${article.id}`}
                className="text-teal-900 font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {displayLimit < articles.length && (
        <div className="text-center mb-10">
          <button
            onClick={showMoreArticles}
            className="bg-teal-600 text-white px-5 py-3 rounded-md hover:bg-teal-700"
          >
            Load More
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ArticlesPage;