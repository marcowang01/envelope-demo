import clsx from "clsx";
import { Event } from "@/data/calendar";
import { CalendarEvent } from "./calendar-event";

export function CalendarCell({
  date,
  isSelected,
  row,
  col,
  events,
}: {
  date: string;
  isSelected: boolean;
  row: number;
  col: number;
  events: Event[];
}) {
  const day = new Date(date).getDate();
  const weekDay = new Date(date).getDay();
  const dayOfWeekShortcuts = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
  const dayOfWeek = row === 0 ? dayOfWeekShortcuts[weekDay] : undefined;

  return (
    <div
      className={clsx(
        "group relative w-[130px] h-[130px] rounded-[5px] border border-gray-425 hover:bg-white cursor-pointer",
        {
          "bg-white": isSelected,
        },
      )}
    >
      {dayOfWeek && (
        <div className="absolute top-[10px] left-[10px] text-gray-500 font-light text-[20px]">
          {dayOfWeek}
        </div>
      )}
      <div
        className={clsx(
          "absolute top-[12px] right-[12px] font-light text-[10px] text-gray-500 group-hover:text-red-600",
          {
            "text-red-600": isSelected,
            "text-gray-500": !isSelected,
          },
        )}
      >
        {day}
      </div>
      <div className="absolute flex flex-col gap-[2px] px-[2px] top-[40px] w-full">
        {events.map((event, index) => {
          return <CalendarEvent key={index} event={event} />;
        })}
      </div>
    </div>
  );
}
