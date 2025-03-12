"use client"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { ChevronDownIcon } from "@heroicons/react/solid";

export default function SearchComponent() {
  const [query, setQuery] = useState("");

  return (
    <form className="flex items-center rounded-full bg-gray-100 p-4 w-full max-w-lg mx-auto">
      <FaSearch className="text-red-500 mx-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter the search word here"
        className="bg-transparent outline-none text-sm flex-grow placeholder-red-300"
      />
      <div className="flex items-center text-red-500 mx-2">
        <span className="mr-1">Prevention</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
          </svg>
      </div>
    </form>
  );
}
