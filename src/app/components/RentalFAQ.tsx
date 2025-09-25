"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    question: "How do I book a rental house?",
    answer:
      "You can book a rental house through our website or by contacting us directly. Simply select your desired property, check availability, and follow the booking instructions.",
  },
  {
    question: "What amenities are included in the rental?",
    answer:
      "All of our properties include essentials like Wi-Fi, air conditioning, towels, linens, and fully-equipped kitchens. Specific amenities may vary by property and are listed in each listing.",
  },
  {
    question: "Is there a minimum stay requirement?",
    answer:
      "Yes, most of our properties require a minimum stay of 2 to 3 nights, especially during high season. Some may have weekly rental requirements.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Our cancellation policy varies by property. Please refer to the listing details or contact us directly for more information.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Some properties are pet-friendly. Look for the pet icon on listings or contact us to confirm before booking.",
  },
  {
    question: "Is cleaning included in the rental price?",
    answer:
      "A one-time cleaning fee may apply, which will be included in your total price at checkout.",
  },
];

export default function RentalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className=" rounded-xl shadow-xl transition-all ">
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center transition-colors  ${
                  isOpen ? "bg-blue-50 text-blue-800" : "bg-white"
                }`}
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
              {isOpen && (
                <div className="bg-blue-50 px-6 pb-4 text-blue-800 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
