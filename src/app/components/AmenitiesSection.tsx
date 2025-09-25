"use client";

import AmenityCard from "./AmenityCard";
import {
  FaWifi,
  FaSwimmer,
  FaParking,
  FaConciergeBell,
  FaTv,
  FaSnowflake,
  FaUtensils,
  FaPaw,
} from "react-icons/fa";

const amenities = [
  {
    icon: <FaWifi />,
    title: "Free Wi-Fi",
    description: "High-speed internet available throughout the property.",
  },
  {
    icon: <FaSwimmer />,
    title: "Swimming Pool",
    description: "Relax and enjoy our outdoor pool with a beautiful view.",
  },
  {
    icon: <FaParking />,
    title: "Parking",
    description: "Secure on-site parking for all our guests.",
  },
  {
    icon: <FaConciergeBell />,
    title: "24/7 Reception",
    description: "Always here to assist you during your stay.",
  },
  {
    icon: <FaTv />,
    title: "Smart TV",
    description: "Enjoy Netflix, YouTube, and more on a flat-screen TV.",
  },
  {
    icon: <FaSnowflake />,
    title: "Air Conditioning",
    description: "Stay cool and comfortable in all rooms.",
  },
  {
    icon: <FaUtensils />,
    title: "Kitchen",
    description: "Fully equipped kitchen for all your cooking needs.",
  },
  {
    icon: <FaPaw />,
    title: "Pet Friendly",
    description: "Bring your furry friends along with you.",
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Amenities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, idx) => (
            <AmenityCard
              key={idx}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
