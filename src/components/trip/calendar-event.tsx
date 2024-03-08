import { Event } from "@/data/calendar";
import clsx from "clsx";

export function CalendarEvent({ event }: { event: Event }) {
  const { title, bgColor, textColor } = event;

  return (
    <div
      className={clsx(
        "w-full rounded-sm flex justify-start items-center pl-1 text-[8px] font-bold",
        // bgColor,
        // textColor
      )}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {title}
    </div>
  );
}
