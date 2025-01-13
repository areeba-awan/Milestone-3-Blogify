"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

// THIS IS A POSTS PAGE MAIN PAGE OF BLOGS
const posts = [
  {    // BLOG 1 DETAIL
    id: "1",
    title: "Unveiling the Mystical Beauty of Neelum Valley",
    image: "/images/neelum valley.jpeg",
    content: [
      "Neelum Valley, often referred to as the Blue Gem of Pakistan, is a breathtaking region nestled in the Azad Kashmir territory.",
      "Neelum Valley is also home to a rich cultural heritage, with traditional wooden houses, hospitable locals, and a tranquil atmosphere that beckons travelers seeking peace and tranquility. Popular destinations within the valley include the charming towns of Keran, Sharda, and Kel, each offering unique experiences and breathtaking views.",
      "For adventure enthusiasts, Neelum Valley offers a range of outdoor activities such as hiking, fishing, and camping. The valley's clear night skies make it an ideal spot for stargazing, while its pristine rivers and streams are perfect for fishing and boating.Whether you are drawn to its natural wonders, cultural richness, or simply the allure of a tranquil escape, Neelum Valley promises an unforgettable journey into the heart of nature's splendor..",
      "The valley is renowned for its lush green meadows, dense forests, streams, and snow-capped mountains. It offers breathtaking views, making it a dream destination for nature lovers and adventure seekers alike."
    ],
  },
  {   // BLOG 2 DETAILS
    id: "2",
    title: "Hidden Valley of Chitral, The Heavenly Kingdom",
    image: "/images/chitral-valley.jpg",
    content: [
      "Nestled in the heart of the Hindu Kush mountain range, Chitral Valley is a mesmerizing blend of untouched natural beauty and rich cultural heritage. As one of Pakistans best-kept secrets, this valley offers an unparalleled experience for those seeking adventure, tranquility, and a deeper connection with nature.",
      "From the moment you set foot in Chitral Valley, you are greeted by a landscape that seems almost otherworldly. Towering snow-capped peaks stand as guardians over the lush green meadows, while the pristine Chitral River winds its way through the valley, reflecting the azure skies above. The air is crisp and invigorating, filled with the scent of pine forests and blooming wildflowers.",
      "Chitral is not just a feast for the eyes but also a haven for wildlife enthusiasts. The valley is home to several rare and endangered species, including the elusive snow leopard, the majestic Markhor goat, and the graceful Marco Polo sheep. Birdwatchers will delight in spotting colorful pheasants, eagles, and other avian wonders.",
      "Exploring Chitral Valley means embarking on a journey through history. The ancient forts, such as the Chitral Fort and Shahi Qila, stand as testaments to the region's historical significance. The bustling bazaars offer a glimpse into the local way of life, where you can find handicrafts, traditional Chitrali hats, and delicious local delicacies.",
    ],
 },
  {   // BLOG 3 DETAILS
    id: "3",
    title: "Whispers of Kashmir: Tales from the Enchanted Valley",
    image: "/images/kashmir.jpg",
    content: [
      "Kashmir, often referred to as Paradise on Earth, is a region of stunning natural beauty located in the northern part of the Indian subcontinent. Nestled between the towering Himalayas and the serene Pir Panjal mountain range, Kashmir boasts lush green valleys, crystal-clear lakes, and vibrant gardens. The iconic Dal Lake, with its houseboats and shikaras, offers a peaceful escape, while the meadows of Gulmarg and Pahalgam provide picturesque landscapes and opportunities for adventure. Kashmir's rich cultural heritage, reflected in its traditional handicrafts, music, and cuisine, adds to the region's charm. Despite its beauty, Kashmir has a complex history and remains a place of both breathtaking landscapes and profound significance.",
      "Kashmir Nestled in the northern part of the Indian subcontinent,Paradise title that aptly captures its ethereal beauty. This stunning region is cradled between the mighty Himalayas and the Pir Panjal mountain range, offering a breathtaking blend of snow-capped peaks, verdant valleys, and serene lakes.",
      "The iconic Dal Lake is perhaps Kashmir's most famous landmark. Picture a tranquil expanse of water dotted with traditional houseboats and shikaras (wooden boats) that glide silently across the surface. The lake is a hub of activity, with floating gardens, vibrant markets, and beautiful Mughal-era gardens along its shores. A ride on a shikara offers a unique perspective, allowing visitors to experience the lake's serene beauty and the daily life of those who live on its waters.",
    ],
  },
   // BLOG 4 DETAILS   
    {   
    id: "4",
    title: "The Enchanted Valleys Naran and Kaghan",
    image: "/images/naran-kaghan-valley.jpeg",
    content: [
      "Nestled in the heart of the Kaghan Valley, Naran is a picturesque town that serves as a gateway to some of Pakistan's most breathtaking natural wonders. Together, Naran and Kaghan form a haven for nature lovers, adventure enthusiasts, and anyone seeking a serene escape from the hustle and bustle of city life. Let's embark on a journey to explore the hidden gems and awe-inspiring landscapes of Naran and Kaghan Valley.A Paradise for Nature Lovers, The valleys of Naran and Kaghan are renowned for their lush greenery, pristine lakes, and majestic mountains. One of the most iconic spots is Lake Saif-ul-Muluk, a crystal-clear alpine lake surrounded by towering peaks. Legend has it that fairies descend to the lake at night, adding an air of mystique to this enchanting location.For those with a penchant for adventure, Naran and Kaghan offer a plethora of activities. From hiking and trekking through verdant meadows to jeep safaris that take you to the far reaches of the valley, there's something for everyone. The journey to Babusar Pass is particularly thrilling, offering panoramic views of the surrounding mountains and valleys.",
      "The valleys are not just about natural beauty, they are also home to a rich cultural heritage. The local communities are warm and welcoming, and their traditions and festivals provide a glimpse into their way of life. Visiting the local markets and trying traditional cuisines is a delightful experience that shouldn't be missed. Naran and Kaghan are teeming with diverse wildlife and unique flora. Keep an eye out for the elusive snow leopard, the majestic Himalayan black bear, and various species of birds. The valleys are also adorned with colorful wildflowers that add to the charm of the landscape. The best time to visit Naran and Kaghan is during the summer months, from June to September, when the weather is pleasant and the valleys are accessible. The lush green meadows, blooming flowers, and clear blue skies make for a picture-perfect setting.",
    ],
  },
  {  // BLOG 5 DETAILS   
    id: "5",
    title: "The Serene Beauty of Attabad Lake",
    image: "/images/attabad lake.jpg",
    content: [
      "The Enchanting Attabad Lake, Nestled in the heart of the Hunza Valley, Attabad Lake is a mesmerizing natural wonder that has captivated the hearts of many. Formed in 2010 as a result of a massive landslide that blocked the Hunza River, this turquoise gem has become a symbol of resilience and beauty. The lake stretches over 21 kilometers, with its crystal-clear waters reflecting the surrounding snow-capped peaks and rugged landscapes. This unexpected creation has transformed the area into one of Pakistans most sought-after tourist destinations.",
      "The formation of Attabad Lake was a tragic event, as the landslide led to the displacement of many local residents and the loss of their homes. However, over the years, the lake has become a beacon of hope and renewal. The communities around the lake have adapted and thrived, turning adversity into opportunity. The serene waters and stunning scenery have attracted travelers from all over the world, providing a much-needed boost to the local economy through tourism.",
      "Attabad Lake offers a plethora of activities for visitors to enjoy. Boating on the tranquil waters is a popular choice, allowing tourists to soak in the breathtaking views from every angle. For the more adventurous, jet skiing and fishing provide exciting alternatives. The area is also perfect for picnics and leisurely strolls along the shore, with the serene atmosphere offering a perfect escape from the hustle and bustle of daily life." ,
      "he ideal time to visit Attabad Lake is during the summer months, from May to September, when the weather is pleasant and the lake is at its most vibrant. The surrounding mountains and valleys are lush and green, creating a picturesque backdrop for photography enthusiasts. Winter, although less frequented by tourists, offers its own unique charm, with the lake partially frozen and the landscape covered in a blanket of snow.",
  ],
  },
  {    // BLOG 6 DETAILS   
    id: "6",
    title: "Emerald Gem: Exploring Kachura Lake",
    image: "/images/kachura lake.jpeg",
    content: [
      "Kachura Lake, also known as Shangrila Lake, is a captivating natural wonder located in the Skardu District of Gilgit-Baltistan, Pakistan. It comprises two lakes: the Upper Kachura Lake and the Lower Kachura Lake. Known for its stunning beauty and serene environment, Kachura Lake offers a perfect escape into nature.Upper Kachura Lake, This lake is relatively less explored and offers a pristine setting with clear blue waters surrounded by rugged mountains and lush greenery. It is an ideal spot for nature lovers, offering opportunities for fishing, boating, and hiking.",
      "This lake is more developed and famous for the Shangrila Resort, often referred to as (Heaven on Earth). The resort provides luxurious accommodations and breathtaking views of the lake and surrounding landscape. The area is popular among tourists for its picturesque scenery and tranquil ambiance.Visitors to Kachura Lake can enjoy various recreational activities, including boating, fishing, and picnicking. The surrounding region is perfect for trekking and exploring the natural beauty of the area. The lake's crystal-clear waters and the reflection of the majestic mountains create a mesmerizing sight.",
      "The best time to visit Kachura Lake is during the summer months, from May to September, when the weather is pleasant, and the lake is accessible. During this period, the lush green surroundings and vibrant wildflowers add to the lake's charm.",
    ],
  },
  {  // BLOG 7 DETAILS   
    id: "7",
    title: "Nathia Gali: The Jewel of the Galyat",
    image: "/images/nathia galli.jpg",
    content: [
      "Discovering Nathia Gali A Hill Station Paradise, Nestled in the Abbottabad District of Pakistan's Khyber Pakhtunkhwa Province, Nathia Gali is a picturesque hill station that offers a perfect escape from the hustle and bustle of city life. Known for its lush green landscapes, pleasant weather, and serene atmosphere, Nathia Gali is a popular destination for both local and foreign tourists.",
      "Mukshpuri Top: A trek to Mukshpuri Top offers stunning panoramic views of the surrounding valleys and mountains. The trail takes you through dense forests and alpine meadows, providing a rewarding experience for adventure seekers.Dunga Gali: Known for its mesmerizing pine forests, Dunga Gali is perfect for leisurely walks and nature walks. The gentle rustling of leaves and the sweet scent of pine create a serene atmosphere.Lalazar Wildlife Park: This beautiful meadow is home to diverse flora and fauna, making it an excellent spot for picnics and wildlife spotting. The park offers a chance to immerse yourself in nature and enjoy a peaceful day out.Namli Maira: A lesser-known paradise, Namli Maira is a tranquil spot with lush meadows and scenic beauty. It's an ideal place for unwinding and connecting with nature.Pipeline Track: This picturesque trail follows the gentle flow of a water pipeline through dense forests and rolling hills. It's a relatively easy walk, perfect for families and individuals looking to savor the beauty of Nathia Gali at a leisurely pace.",
      "The best time to visit Nathia Gali is from April to October, when the weather is cool and pleasant. The summer months are particularly popular, with the lush greenery and blooming flowers adding to the scenic beauty of the hill station.",
    ],
  },
  {   // BLOG 8 DETAILS   
    id: "8",
    title: "Pakistan Monument A Tribute to Unity",
    image: "/images/blog 8.jpg",
    content: [
      "The Pakistan Monument, located in Islamabad, is a national symbol that represents the unity and strength of the Pakistani people. Inaugurated on March 23, 2007, the monument's design symbolizes the countrys cultural diversity and rich heritage. It consists of four main petals, representing the four provinces (Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan), and three smaller petals, symbolizing the territories of Gilgit-Baltistan, Azad Kashmir, and the Federally Administered Tribal Areas (FATA).",  
       "The structure is designed in the shape of a blooming flower, signifying the country's growth and progress. The inner walls of the petals are adorned with intricate artwork depicting significant historical events and cultural landmarks. The central platform features a star and crescent, representing the flag of Pakistan.",
       "The Pakistan Monument Museum, located adjacent to the monument, provides visitors with insights into the country's history, heritage, and achievements. The monument stands as a tribute to the sacrifices and contributions of the people of Pakistan, celebrating their unity in diversity.",
       "The significance of the monument goes beyond its architectural beauty. It holds a deep cultural and historical meaning, representing the unity and strength of the people of Pakistan. Visitors can learn about the history of the nation through a series of informative displays and exhibits housed at the Pakistan Monument Museum, which is located beneath the monument.",
       "The Pakistan Monument is not just a popular tourist attraction, it is a national symbol that evokes a sense of pride and unity among Pakistanis. For visitors, the monument offers an opportunity to understand the multifaceted culture of Pakistan and the unity that ties the diverse ethnicities and regions together. The open space around the monument is often used for national events, ceremonies, and celebrations, further cementing its importance in the cultural and political landscape of the country."
      ],
  },
  {   // BLOG 9 DETAILS   
    id: "9",
    title: "Faisal Mosque A Majestic Blend of Faith, Culture, and Architecture",
    image: "/images/blog 9.jpg",
    content: [
      "The Faisal Mosque, situated in the capital city of Islamabad, is a masterpiece of modern architecture and an iconic symbol of Pakistans spiritual and cultural identity. Standing proudly against the backdrop of the Margalla Hills, this mosque is not just an architectural marvel but also a symbol of faith, unity, and peace.",
      "Completed in 1986, the Faisal Mosque was designed by the Turkish architect Vedat Dalokay, who envisioned a structure that would blend traditional Islamic architecture with a modern, contemporary flair. Its design departs from the conventional dome shape, instead opting for a unique tent-like structure with four towering minarets. This distinctive design has made the mosque one of the most recognizable religious structures in the world.",
      "Faisal Mosques design is a perfect marriage of innovation and tradition. The mosques central prayer hall is characterized by its vast, open space, creating an atmosphere of tranquility and reverence. The sleek, angular lines of the building, combined with the use of concrete and marble, give the mosque a contemporary feel while still respecting the traditional elements of Islamic design.The mosques minarets, which rise 90 meters high, are a striking feature, adding a vertical elegance to the structure. The prayer hall is surrounded by vast courtyards and lush gardens, providing a serene environment for prayer and reflection. ",
      "Beyond its religious significance, the mosque also serves as a cultural landmark. The tranquil surroundings and majestic design make it a popular destination for tourists, offering a glimpse into the rich Islamic heritage of Pakistan. Visitors are often struck by the mosque’s peaceful atmosphere and awe-inspiring beauty, making it a must-see attraction for anyone visiting Islamabad.",
],
  },
];
// USE PARAM IS USED 
const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText.trim()]);
      setCommentText("");
    }
  };

  if (!post) {
    return (
      <div className="text-center py-10 text-lg text-red-500">
        Post not found
      </div>
    );
  }
    // USE SOME STYLING HERE 
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-teal-100 to-teal-200 pt-16">
      <Navbar />
      <div className="container mx-auto text-center p-6 sm:p-12 pt-16 md:pt-24">
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-64 sm:h-72 lg:h-96 mx-auto">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            className="rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mx-auto max-w-4xl my-10">
          {post.title}
        </h1>
        <div className="text-lg  sm:text-xl text-gray-900  leading-relaxed mx-auto max-w-4xl">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-left">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-10 max-w-sm md:max-w-2xl lg:max-w-4xl bg-gradient-to-t from-green-200 via-teal-100 to-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-black">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <div className="flex items-center">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border border-gray-800 rounded-l px-4 py-2 text-black focus:ring focus:ring-green-500 overflow-wrap break-words"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-2 ml-2 rounded-r hover:bg-teal-600"
            >
              Post
            </button> 
          </div>
        </form>
          
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No comments yet. Be the first to share your thoughts!
            </p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md p-4 text-gray-800"
              >
                {comment}
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;