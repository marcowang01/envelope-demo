"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavbarItem({
  hoverClass,
  path,
  text,
  icon,
}: {
  hoverClass: string;
  path: string;
  text?: string;
  icon?: ReactNode;
}) {
  const pathName = usePathname();

  return (
    // <Link href={path}>
    <div
      className={clsx(
        "p-4 font-normal text-base rounded-xl cursor-pointer transition-all",
        hoverClass,
        {
          "bg-gray-100  text-green-400": pathName === "/" && path === "/",
          "bg-rose-400 text-white":
            pathName === "/newsletter" && path === "/newsletter",
          "bg-blue-500 text-white":
            pathName === "/apartment" && path === "/apartment",
          "bg-pink-500 text-white": pathName === "/job" && path === "/job",
          "bg-yellow-400 text-white":
            pathName === "/friends" && path === "/friends",
          "bg-gray-100 text-orange-400 ":
            pathName === "/settings" && path === "/settings",
          "bg-gray-100  text-gray-500 ": pathName !== path,
        },
      )}
    >
      {text?.toLocaleUpperCase()}
      {icon}
    </div>
    // </Link>
  );
}
