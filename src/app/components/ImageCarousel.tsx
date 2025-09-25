"use client";
import { useEffect, useRef, useState } from "react";

const GalleryCarousel: React.FC = () => {
  const baseImages = [
    "/roomCarousel/1.jpg",
    "/roomCarousel/2.jpg",
    "/roomCarousel/3.jpg",
    "/roomCarousel/4.jpg",
    "/roomCarousel/5.jpg",
    "/roomCarousel/6.jpg",
    "/roomCarousel/7.jpg",
    "/roomCarousel/8.jpg",
  ];

  // Create cloned image list for looping effect
  const images = [
    baseImages[baseImages.length - 1], // clone last to start
    ...baseImages,
    baseImages[0], // clone first to end
  ];

  const [current, setCurrent] = useState(1); // start at first "real" image

  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    if (current >= images.length - 1) return;
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (current <= 0) return;
    setCurrent((prev) => prev - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const distance = touchStartX.current - e.clientX;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
  };

  // Loop handling: jump from cloned ends to real ends without animation flick
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (current === 0) {
        setCurrent(baseImages.length);
      } else if (current === images.length - 1) {
        setCurrent(1);
      }
    }, 300); // matches CSS transition duration

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-600 mb-1">Gallery</h1>
      <div className="w-16 h-[2px] bg-yellow-600 mb-5" />

      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        ref={carouselRef}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out gap-4 px-6"
          style={{
            transform: `translateX(-${current * (100 / 3)}%)`,
            width: `${(images.length * 100) / 3}%`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`w-[calc(100%/3)] flex-shrink-0 overflow-hidden rounded-3xl transition-all duration-300 ${
                index === current ? "opacity-100" : "opacity-50"
              }`}
            >
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-[25rem] h-[40rem] object-cover object-center rounded-3xl shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots (optional) */}
      <div className="flex justify-center mt-6 gap-2">
        {baseImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index + 1)} // +1 for cloned first
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index + 1 ? "bg-blue-500 w-4" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
