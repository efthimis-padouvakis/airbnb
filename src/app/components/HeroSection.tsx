"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const images = [
  "/HeroRoom/room1.jpg",
  "/HeroRoom/room2.jpg",
  "/HeroRoom/room3.jpg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Background ${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: index === currentImageIndex ? 10 : 0,
            }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center gap-4">
        {/* Κύριο κείμενο */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-white text-4xl sm:text-6xl font-bold drop-shadow-lg"
        >
          Book your dream stay
        </motion.h1>

        {/* Δεύτερο κείμενο */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-black text-4xl sm:text-6xl font-semibold drop-shadow  px-4 py-1 rounded"
        >
          with us
        </motion.p>

        {/* Booking Box */}
        <div className="bg-white/30 bg-opacity-90 backdrop-blur rounded-xl shadow-lg w-full max-w-3xl pb-[2rem] flex flex-col items-center relative mt-6">
          {/* Close button (mobile only) */}
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold z-30"
              aria-label="Close"
            >
              ×
            </button>
          )}

          {/* Book Now toggle button (mobile only) */}
          {!isOpen && (
            <button
              className="md:hidden bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition w-full"
              onClick={() => setIsOpen(true)}
            >
              Book Now
            </button>
          )}

          {/* Booking Form */}
          <div
            className={`w-full flex-col gap-4 mt-4 items-center ${
              isOpen ? "flex" : "hidden"
            } md:flex md:flex-row md:items-end md:gap-4`}
          >
            {/* Arrival */}
            <div className="w-auto md:w-auto relative text-center">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Arrival
              </label>
              <FaCalendarAlt className="absolute left-3 top-[50px] -translate-y-1/2 text-gray-400 pointer-events-none" />
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                placeholderText="dd/mm/yyyy"
                className="text-center p-3 border rounded-md w-40"
              />
            </div>

            {/* Departure */}
            <div className="w-auto md:w-auto relative text-center">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Departure
              </label>
              <FaCalendarAlt className="absolute left-3 top-[50px] -translate-y-1/2 text-gray-400 pointer-events-none" />
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                minDate={checkIn ?? undefined}
                placeholderText="dd/mm/yyyy"
                className="text-center p-3 border rounded-md w-40"
              />
            </div>

            {/* People */}
            <div className="w-auto md:w-auto text-center">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                People
              </label>
              <select
                className="w-auto p-3 border rounded-md w-60"
                defaultValue="1"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Final Book Now button (inside form) */}
            <div className="w-auto md:w-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition w-full md:w-auto">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
