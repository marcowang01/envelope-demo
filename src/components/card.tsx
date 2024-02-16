import clsx from "clsx";
import { ReactNode } from "react";

export function Card({
  title,
  body,
  colorClass,
  icon,
}: {
  title: string;
  body: ReactNode;
  colorClass?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="group w-full">
      <div
        className={clsx(
          "text-3xl font-light mb-[20px] flex flex-row justify-start items-center gap-[10px] text-gray-500",
          colorClass,
        )}
      >
        {icon && <div className="w-[20px]">{icon}</div>}
        {title}
      </div>
      <div className="w-full h-[1px] bg-gray-350" />
      <div className="w-full mt-[30px] mb-[40px]">{body}</div>
    </div>
  );
}
