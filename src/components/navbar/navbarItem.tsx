import { ReactNode } from "react";
import clsx from "clsx";

export function NavbarItem({
  hoverClass,
  text,
  icon,
}: {
  hoverClass: string;
  text?: string;
  icon?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "bg-gray-300 bg-opacity-40 p-4 text-gray-500 font-normal text-base rounded-xl cursor-pointer transition-all",
        hoverClass,
      )}
    >
      {text?.toLocaleUpperCase()}
      {icon}
    </div>
  );
}
