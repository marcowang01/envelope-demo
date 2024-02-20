import { Card } from "./card";
import { calendarEvents } from "@/data/emails";
import { CalendarIcon } from "@/assets/calendar-icon";
import { SimpleRow } from "./simpleRow";
import clsx from "clsx";

function CalendarCardItems() {
  return (
    // 160 is exactly 4 rows of 40px
    <div
      className={clsx(
        "flex flex-col gap-[16px] justify start mt-[20px] h-[160px] overflow-y-auto",
        {
          "pr-[8px]": calendarEvents.length > 4,
        },
      )}
    >
      {calendarEvents.map((event) => (
        <SimpleRow key={event.id} title={event.event} label={event.label} />
      ))}
    </div>
  );
}

export function CalendarCard() {
  return (
    <Card
      title={"Calendar"}
      body={<CalendarCardItems />}
      colorClass="group-hover:text-red-400"
      icon={<CalendarIcon />}
    />
  );
}
