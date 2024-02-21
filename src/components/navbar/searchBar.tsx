"use client"

import { CmdIcon } from "@/assets/cmd-icon";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = () => {
    // Ensure that the search input is not empty
    if (searchInput.trim()) {
      router.push(`/trip/${searchInput}`);
    } else {
      router.push(`/`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="group flex items-center bg-gray-300 bg-opacity-40 p-4 rounded-xl grow">
      <div className="pointer-events-none text-gray-500 group-hover:text-blue-400 group-focus-within:text-blue-400">
        <CmdIcon />
      </div>
      <input
        type="text"
        placeholder="Ask me anything..."
        className="bg-transparent border-none w-full placeholder-gray-500 pl-3 focus:outline-none peer text-gray-500 focus:text-gray-500"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown} // Add the onKeyDown event listener
      />
    </div>
  );
}
