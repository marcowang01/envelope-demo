import { NavbarItem } from "./navbarItem";
import { HomeIcon } from "@/assets/home-icon";
import { GearIcon } from "@/assets/gear-icon";
import { SearchBar } from "./searchBar";

export function Navbar() {
  const searchBar = () => {
    return <input></input>;
  };

  return (
    <div className="flex flex-row gap-3 ">
      <NavbarItem icon={<HomeIcon />} hoverClass={"hover:text-green-400"} />
      <SearchBar />
      <NavbarItem text={"newsletter"} hoverClass={"hover:bg-rose-400"} />
      <NavbarItem text={"apartment"} hoverClass={"hover:bg-blue-500"} />
      <NavbarItem text={"job"} hoverClass={"hover:bg-pink-500"} />
      <NavbarItem text={"friends"} hoverClass={"hover:bg-yellow-400"} />
      <NavbarItem icon={<GearIcon />} hoverClass={"hover:text-orange-400"} />
    </div>
  );
}
