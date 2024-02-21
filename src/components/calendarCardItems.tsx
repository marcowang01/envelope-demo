import { Card } from "./card";
import { CalendarEmail } from "@/data/emails";
import { CalendarIcon } from "@/assets/calendar-icon";
import { SimpleRow } from "./simpleRow";
import clsx from "clsx";

export function CalendarCardItems({
  calendarEvents,
}: {
  calendarEvents: CalendarEmail[];
}) {
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
        <SimpleRow
          key={event.id}
          id={event.id}
          title={event.content}
          label={event.status}
        />
      ))}
    </div>
  );
}
