"use client";

import Image from "next/image";

const activities = [
  {
    title: "Walking & Cycling",
    text: `If you enjoy walking or cycling, Heraklion is the perfect city for you. The new seaside promenade starts from Koules Fortress and stretches all the way to the Pankritio Stadium, offering a long pedestrian and bike path with parks and playgrounds. Also, the breakwater extends nearly 2 kilometers from Koules to the lighthouse. Whichever route you choose, you're sure to enjoy one of the most beautiful walks or bike rides.`,
    image: "/whatToDo/liosSquare.jpg",
  },
  {
    title: "Family Experiences",
    text: `Heraklion is the perfect holiday destination if you're traveling with children, as there are plenty of activities suitable for both kids and adults. You can all visit the CretAquarium, enjoy a day at Watercity Waterpark, go horseback riding at a local riding club, or play in one of the many escape rooms found throughout the city.`,
    image: "/whatToDo/family.png",
  },
  {
    title: "Nightlife",
    text: `Heraklion is a lively city all year round and will satisfy even the most demanding visitors. With thousands of students, tourists, and locals who love to have fun, the city offers endless options including cafés, taverns, restaurants, bars, and clubs.`,
    image: "/whatToDo/night.png",
  },
];

export default function WhatToDoHere() {
  return (
    <section id="About" className="bg-[#f6f6f6] py-12 px-4 sm:px-8 md:px-16">
      <h1 className="text-4xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
        What to do here
      </h1>
      {activities.map((activity, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-8 my-12`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={activity.image}
              alt={activity.title}
              width={700}
              height={500}
              className="rounded shadow-md object-cover w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">
              {activity.title}
            </h2>
            <div className="w-16 h-[2px] bg-yellow-600 mb-5" />
            <p className="text-base sm:text-lg leading-relaxed">
              {activity.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
