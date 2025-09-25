"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Stay</h2>

        <div className="flex flex-col gap-4">
          {/* Arrival */}
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Arrival
            </label>
            <FaCalendarAlt className="absolute left-3 top-10 -translate-y-1/2 text-gray-400" />
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              placeholderText="dd/mm/yyyy"
              className="p-3 pl-10 border rounded-md w-full"
            />
          </div>

          {/* Departure */}
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Departure
            </label>
            <FaCalendarAlt className="absolute left-3 top-10 -translate-y-1/2 text-gray-400" />
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              selectsEnd
              startDate={checkIn}
              endDate={checkOut}
              minDate={checkIn ?? undefined}
              placeholderText="dd/mm/yyyy"
              className="p-3 pl-10 border rounded-md w-full"
            />
          </div>

          {/* People */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              People
            </label>
            <select className="p-3 border rounded-md w-full" defaultValue="1">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
