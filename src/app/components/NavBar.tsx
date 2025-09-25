"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // κλείνει dropdown στο mobile
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-yellow-800 text-white z-50 transition-transform duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            <img src="/logo.svg" alt="Logo" className="w-20 h-10" />
          </div>

          {/* Links (Desktop only) */}
          <div className="hidden md:flex gap-8 mx-auto">
            {["Home", "About", "Gallery", "FAQ", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="hover:text-gray-200 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Book Now button (Desktop) */}
          <button
            onClick={() => setShowModal(true)}
            className="hidden md:block bg-black text-white px-4 py-2 rounded-lg 
                       hover:bg-gray-800 active:scale-95 transition-all duration-200"
          >
            Book Now
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-yellow-800/90 backdrop-blur-md gap-6 py-6 shadow-lg border-t border-yellow-600/40">
            {["Home", "About", "Gallery", "FAQ", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="hover:text-gray-200 transition-colors"
              >
                {item}
              </button>
            ))}

            {/* Book Now button (Mobile dropdown) */}
            <button
              onClick={() => {
                setIsOpen(false);
                setShowModal(true);
              }}
              className="bg-black text-white px-4 py-2 rounded-lg 
                         hover:bg-gray-800 active:scale-95 transition-all duration-200"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* Booking modal */}
      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
