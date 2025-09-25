import HeroSection from "@/app/components/HeroSection";
import WhatToDoHere from "@/app/components/whatToDoHere";
import ImageCarousel from "@/app/components/ImageCarousel";
import RentalFAQ from "./components/RentalFAQ";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImageCarousel />
      <WhatToDoHere />
      <RentalFAQ />
    </main>
  );
}
