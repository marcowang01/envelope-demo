import { Card } from "./card";
import { calendarEvents } from "@/data/emails";
import { CalendarIcon } from "@/assets/calendar-icon";
import { SimpleRow } from "./simpleRow";

function CalendarCardItems() {
  return (
    <div className="flex flex-col gap-4 justify start">
      {calendarEvents.map((event) => (
        <SimpleRow 
          key={event.id}
          title={event.event}
          label={event.label}
        />
      ))}
    </div>
  )
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
