"use client";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Logo + About */}
        <div>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={112}
            height={40}
            className="w-28 mb-4"
          />
          <p className="text-gray-200 text-sm">
            Cozy apartments in Greece. Enjoy your stay with comfort and style.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Google Maps */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Find Us</h3>
          <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.375835592564!2d23.72753831532547!3d37.98381097972539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd2b3b1f3d1f%3A0x400bd2ce2b9b350!2sAthens!5e0!3m2!1sen!2sgr!4v1700000000000!5m2!1sen!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black mt-8 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Cozy Apartments Greece. All rights
        reserved.
      </div>
    </footer>
  );
}
