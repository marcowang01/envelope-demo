import { CmdIcon } from "@/assets/cmd-icon";

export function SearchBar() {
  return (
    <div className="relative bg-gray-300 opacity-40 p-4 text-gray-500 p-4 rounded-md grow">
      <input
        type="text"
        placeholder="Ask me anything..."
        className="bg-transparent border-none w-full focus:ring-0 placeholder-gray-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <CmdIcon />
      </div>
    </div>
  );
}
