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
        "flex flex-col justify start mt-[12px] h-[calc((100vh-549px)*0.33)] max-h-[200px] overflow-y-auto pl-1",
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
