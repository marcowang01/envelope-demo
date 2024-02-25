"use client";

import { CmdIcon } from "@/assets/cmd-icon";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { autocompleteSuggestions } from "@/data/emails";
import { MailIcon } from "@/assets/mail-icon";
import { formatDate } from "@/lib/utils";
import Trie from "@/lib/trie";

const dictionary = {
  words: ['tetfjvro','transcript','trial typefaces','trip confirmation']
}

export function SearchBar() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [autoComplete, setAutoComplete] = useState("");
  const [suggestions, setSuggestions] = useState(autocompleteSuggestions);
  const trie = new Trie();

  // Insert words into trie
  (async () => {
    const words = dictionary.words;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        trie.insert(word)
    }
  }
  )();

  // todo: add tab to autocomplete, add multiword autocomplete

  //console log autocomplete
  useEffect(() => {
    console.log(autoComplete);
  }, [autoComplete]);

  useEffect(() => {
    if (searchInput === "") {
      setAutoComplete("");
    }
  }, [searchInput]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var value = e.target.value;
    setSearchInput(value);
    var words = value.split(" ");
    // var words = value
    var trie_prefix = words[words.length - 1].toLowerCase();
    var found_words = trie.find(trie_prefix).sort((a, b) => {
      return a.length - b.length;
    });
    var first_word = found_words[0];
    if (
      found_words.length !== 0 &&
      value !== "" &&
      value[value.length - 1] !== " "
    ) {
      if (first_word != null) {
        var remainder = first_word.slice(trie_prefix.length);
        setAutoComplete(value + remainder);
      }
    } else {
      setAutoComplete(value);
    }
  };

  const handleSubmit = () => {
    if (searchInput.trim()) {
      router.push(`/trip/${searchInput}`);
    } else {
      router.push(`/`);
    }
    setSearchInput("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  // Filter suggestions based on input
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.searchText.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <div className="relative group flex flex-col items-center rounded-xl grow">
      <div className="absolute bg-gray-50 p-4 rounded-xl w-full">
        <div className="flex items-center w-full relative">
          <div className="pointer-events-none text-gray-500 group-hover:text-blue-400 group-focus-within:text-blue-400">
            <CmdIcon />
          </div>
          <input
            type="text"
            placeholder="Ask me anything..."
            className="bg-transparent border-none w-full placeholder-gray-450 pl-3 focus:outline-none peer text-gray-500 focus:text-gray-500 z-20"
            value={searchInput}
            onChange={(e) => onChange(e)}
            onKeyDown={handleKeyDown}
          />
          <div className="absolute pl-3 left-[20px] text-gray-450 z-10">
            {autoComplete}
          </div>
        </div>
        {searchInput && (
          <>
            <div className="w-full h-[1px] bg-gray-350 my-2 mt-4 hidden group-focus-within:block" />
            <ul className="top-[58px] list-none w-full max-h-60 overflow-auto rounded-lg">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchInput(suggestion.searchText); // Update the search input with the selected suggestion
                    // Optionally, you can submit the search right after selecting
                    // handleSubmit();
                  }}
                >
                  <div className="flex flex-row items-center w-full">
                    <div className="mr-3">
                      <MailIcon />
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col">
                        <div className="text-gray-850 text-[12px]">
                          {suggestion.title}
                        </div>
                        <div className="text-gray-500 text-[8px]">
                          {suggestion.sender}
                        </div>
                      </div>
                      <div className="text-gray-850 text-[10px]">
                        {formatDate(new Date(suggestion.date)).slice(0, -2)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              {filteredSuggestions.length === 0 && (
                <li className="p-2 text-gray-500">No suggestions found</li>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
