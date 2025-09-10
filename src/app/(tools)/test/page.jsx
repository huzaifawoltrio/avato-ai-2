// app/test/page.tsx
import React from "react";

export const metadata = {
  title: "Avato Tailwind CSS Test Page",
};

export default function TailwindTestPage() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-red-500 mb-3">HAHAHAHA</h3>
        <div className="text-gray-300 space-y-2">XD</div>
      </div>
    </div>
  );
}
