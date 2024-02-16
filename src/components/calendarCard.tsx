import { Card } from "./card";
import { calendarEvents } from "@/data/emails";
import { CalendarIcon } from "@/assets/calendar-icon";

function CalendarCardItems() {
  return(
    <div>
      Calendar things
    </div>
  )
}

export function CalendarCard() {
  return (
    <Card
      title={"Calendar"}
      body={<CalendarCardItems />}
      colorClass="text-red-400"
      icon={<CalendarIcon />}
    />
  )
}