import { NavbarItem } from "./navbarItem";
import { HomeIcon } from "@/assets/home-icon";
import { GearIcon } from "@/assets/gear-icon";
import { SearchBar } from "./searchBar";

export function Navbar() {
  const searchBar = () => {
    return <input></input>;
  };

  return (
    <div className="flex flex-row gap-3">
      <NavbarItem icon={<HomeIcon />} color={"green-400"} />
      <SearchBar />
      <NavbarItem text={"newsletter"} color={"rose-400"} />
      <NavbarItem text={"apartment"} color={"blue-500"} />
      <NavbarItem text={"job"} color={"pink-500"} />
      <NavbarItem text={"friends"} color={"yellow-400"} />
      <NavbarItem icon={<GearIcon />} color={"orange-400"} />
    </div>
  );
}
