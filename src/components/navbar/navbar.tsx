import { NavbarItem } from "../navbar/navbarItem";
import { HomeIcon } from "@/assets/home-icon";
import { GearIcon } from "@/assets/gear-icon";
import { SearchBar } from "../navbar/searchBar";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-row gap-3 ">
      <Link href={"/"}>
        <NavbarItem icon={<HomeIcon />} hoverClass={"hover:text-green-400"} />
      </Link>
      <SearchBar />
      <NavbarItem
        text={"newsletter"}
        hoverClass={"hover:bg-rose-400 hover:text-white"}
      />
      <NavbarItem
        text={"apartment"}
        hoverClass={"hover:bg-blue-500 hover:text-white"}
      />
      <NavbarItem
        text={"job"}
        hoverClass={"hover:bg-pink-500 hover:text-white"}
      />
      <NavbarItem
        text={"friends"}
        hoverClass={"hover:bg-yellow-400 hover:text-white"}
      />
      <NavbarItem icon={<GearIcon />} hoverClass={"hover:text-orange-400"} />
    </div>
  );
}
