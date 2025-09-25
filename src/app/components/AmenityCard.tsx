"use client";

import { ReactNode } from "react";

interface AmenityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function AmenityCard({
  icon,
  title,
  description,
}: AmenityCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="text-yellow-600 text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
