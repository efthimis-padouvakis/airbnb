"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/HeroRoom/room1.jpg",
  "/HeroRoom/room2.jpg",
  "/HeroRoom/room3.jpg",
];

const words = ["Simple", "Friendly", "Cozy"];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">
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
            className="text-black text-4xl sm:text-6xl font-semibold drop-shadow px-4 py-1 rounded"
          >
            with us
          </motion.p>

          {/* Animated Words */}
          <div className="mt-4 h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-white text-2xl sm:text-3xl font-medium"
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
