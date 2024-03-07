import { CalendarEmail, Email } from "@/data/emails";
import { SimpleRow } from "../home/simpleRow";
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
        "flex flex-col justify start mt-[12px] h-[160px] overflow-y-auto",
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
          email={event as Email}
        />
      ))}
    </div>
  );
}
