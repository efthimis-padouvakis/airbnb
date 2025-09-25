import HeroSection from "@/app/components/HeroSection";
import WhatToDoHere from "@/app/components/whatToDoHere";
import ImageCarousel from "@/app/components/ImageCarousel";
import RentalFAQ from "./components/RentalFAQ";
import Navbar from "./components/NavBar";
import AmenitiesSection from "./components/AmenitiesSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AmenitiesSection />
      <ImageCarousel />
      <WhatToDoHere />
      <RentalFAQ />
      <Footer />
    </main>
  );
}
