'use client';

import { useState } from 'react';
import { Part } from '@prisma/client';

type ExtendedPart = Part & {
  location: string | null;
};

type PartsSearchProps = {
  parts: ExtendedPart[];
  onSearch: (filteredParts: ExtendedPart[]) => void;
};

export default function PartsSearch({ parts, onSearch }: PartsSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = parts.filter(
      (part) =>
        part.name.toLowerCase().includes(value.toLowerCase()) ||
        part.description.toLowerCase().includes(value.toLowerCase()) ||
        part.partNumber.toLowerCase().includes(value.toLowerCase()) ||
        (part.location && part.location.toLowerCase().includes(value.toLowerCase()))
    );
    onSearch(filtered);
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Procurar item..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
} 