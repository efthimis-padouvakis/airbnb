"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
const images = [
  "/roomCarousel/1.jpg",
  "/roomCarousel/2.jpg",
  "/roomCarousel/3.jpg",
  "/roomCarousel/4.jpg",
  "/roomCarousel/5.jpg",
  "/roomCarousel/6.jpg",
  "/roomCarousel/7.jpg",
  "/roomCarousel/8.jpg",
];

export default function ImageCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section id="gallery" className="w-full py-16 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

        {/* Main carousel */}
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          spaceBetween={10}
          className="rounded-xl shadow-lg"
          thumbs={
            thumbsSwiper && !thumbsSwiper.destroyed
              ? { swiper: thumbsSwiper }
              : undefined
          }
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                alt={`Room ${i + 1}`}
                className="w-full h-[60vh] object-cover rounded-xl"
                width={800}
                height={600}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          spaceBetween={10}
          slidesPerView={4}
          className="mt-4"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                alt={`Thumb ${i + 1}`}
                className="w-full h-24 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-yellow-500 transition"
                width={800}
                height={600}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
