"use client";
import * as React from "react";
import { useState } from "react";

import { anton, work_sans } from "@/styles/fonts";

function Whyattend() {
  const cardData = [
    {
      title: "Networking Opportunities",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/31804c17e2ff811cfb38749ffdd8c72c833ad64e8ec7fd70e447c3a9eea1787f?apiKey=5e27b1defd60460eaa6dca842133145f&",
      text: "Connect with over 100 dynamic marketers and 100 key influencers, fostering valuable relationships and partnerships in influencer marketing.",
    },
    {
      title: "Networking Opportunities",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/31804c17e2ff811cfb38749ffdd8c72c833ad64e8ec7fd70e447c3a9eea1787f?apiKey=5e27b1defd60460eaa6dca842133145f&",
      text: "Connect with over 100 dynamic marketers and 100 key influencers, fostering valuable relationships and partnerships in influencer marketing.",
    },
    {
      title: "Networking Opportunities",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/31804c17e2ff811cfb38749ffdd8c72c833ad64e8ec7fd70e447c3a9eea1787f?apiKey=5e27b1defd60460eaa6dca842133145f&",
      text: "Connect with over 100 dynamic marketers and 100 key influencers, fostering valuable relationships and partnerships in influencer marketing.",
    },
    {
      title: "Networking Opportunities",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/31804c17e2ff811cfb38749ffdd8c72c833ad64e8ec7fd70e447c3a9eea1787f?apiKey=5e27b1defd60460eaa6dca842133145f&",
      text: "Connect with over 100 dynamic marketers and 100 key influencers, fostering valuable relationships and partnerships in influencer marketing.",
    },
    // Add more card data objects here as needed
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`flex flex-col items-center px-5 bg-white ${work_sans.className} `}
    >
      <div
        className={`text-5xl text-center text-black uppercase leading-[61.92px] max-md:text-4xl ${anton.className} `}
      >
        WHY ATTEND?
      </div>
      <div className="self-stretch mt-20 w-full text-3xl italic font-bold tracking-tighter leading-7 text-center text-blue-400 uppercase max-md:mt-10 max-md:max-w-full  ">
        <span className="font-semibold  italic">
          INDIA, WE ARE BRINGING TOGETHER OVER{" "}
        </span>
        <span className="font-semibold italic text-blue-400">
          100 MARKETERS
        </span>
        <span className="font-semibold italic"> AND </span>
        <span className="font-semibold italic text-blue-400">
          100 INFLUENCERS!
        </span>
      </div>
      <div className="mt-11 text-2xl font-medium tracking-tighter leading-8 text-center text-black max-md:mt-10 max-md:max-w-full">
        Experience the future of marketing in the dynamic world of influencer
        marketing at the Influence Exchange & Awards Confex India 2024. Here are
        some reasons why you shouldn't miss this event:
      </div>
      {/* Render each card dynamically */}
      <div className="self-stretch mt-2 w-full max-md:max-w-full">
        <div className="flex gap-y-5 gap-x-[2%] flex-wrap max-md:gap-0 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col w-[48%] max-md:ml-0 max-md:w-full px-[30px] ${
                hoveredIndex === index ? "hoveredaward" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-black w-full h-full rounded-[36px] py-[60px]">
                <div
                  className={`text-7xl textaward text-white uppercase leading-[80px] max-md:mt-10 max-md:text-4xl max-md:leading-[49px] px-[40px] ${anton.className} `}
                >
                  {card.title}
                </div>
                <div className="flex flex-col self-stretch my-auto text-xl font-medium leading-6 text-white max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={card.imageUrl}
                    className="w-full aspect-[2.38] max-md:max-w-full relative  my-10 imgaward"
                  />
                  <div className="self-center mt-11 max-md:mt-10 px-[40px]">
                    {card.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whyattend;
