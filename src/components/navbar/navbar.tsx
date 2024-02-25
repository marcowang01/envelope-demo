"use client";
import { NavbarItem } from "../navbar/navbarItem";
import { HomeIcon } from "@/assets/home-icon";
import { GearIcon } from "@/assets/gear-icon";
import { SearchBar } from "../navbar/searchBar";
import Link from "next/link";

const routes = {
  home: "/",
  newsletter: "/newsletter",
  apartment: "/apartment",
  job: "/job",
  friends: "/friends",
  settings: "/settings",
};

export function Navbar() {
  return (
    <div className="flex flex-row gap-3 ">
      <Link href={routes.home}>
        <NavbarItem
          icon={<HomeIcon />}
          hoverClass={"hover:text-green-400"}
          path={routes.home}
        />
      </Link>
      <SearchBar />
      <Link href={routes.newsletter}>
        <NavbarItem
          text={"newsletter"}
          hoverClass={"hover:bg-rose-400 hover:text-white"}
          path={routes.newsletter}
        />
      </Link>
      <Link href={routes.apartment}>
        <NavbarItem
          text={"apartment"}
          hoverClass={"hover:bg-blue-500 hover:text-white"}
          path={routes.apartment}
        />
      </Link>
      <Link href={routes.job}>
        <NavbarItem
          text={"job"}
          hoverClass={"hover:bg-pink-500 hover:text-white"}
          path={routes.job}
        />
      </Link>
      <Link href={routes.friends}>
        <NavbarItem
          text={"friends"}
          hoverClass={"hover:bg-yellow-400 hover:text-white"}
          path={routes.friends}
        />
      </Link>
      <Link href={routes.settings}>
        <NavbarItem
          icon={<GearIcon />}
          path={routes.settings}
          hoverClass={"hover:text-orange-400"}
        />
      </Link>
    </div>
  );
}
