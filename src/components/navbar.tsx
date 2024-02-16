import { NavbarItem } from "./navbarItem"
import { HomeIcon } from "@/assets/home-icon"
import { CmdIcon } from "@/assets/cmd-icon"
import { GearIcon } from "@/assets/gear-icon"
import { SearchBar } from "./searchBar"

export function Navbar() {

  const searchBar = () => {
    return (
      <input>

      </input>
    )
  }

  return (
    <div className="flex flex-row gap-3">
      <NavbarItem
        icon={<HomeIcon />}
      />
      <SearchBar />
      <NavbarItem
        text={"newsletter"}
      />
       <NavbarItem
        text={"apartment"}
      />
       <NavbarItem
        text={"job"}
      />
       <NavbarItem
        text={"friends"}
      />
    </div>
  )
}