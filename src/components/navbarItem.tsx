import { ReactNode } from "react";

export function NavbarItem({
  text,
  icon,
}: {
  text?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="bg-gray-300 opacity-40 p-4 text-gray-500 font-normal text-base rounded-lg">
      {text?.toLocaleUpperCase()}
      {icon}
    </div>
  );
}
