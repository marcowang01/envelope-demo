import { CalendarCard } from "@/components/calendarCard";
import { TodoCard } from "@/components/todoCard";
import { TrackingCard } from "@/components/trackingCard";

export function RightPanel() {
  return (
    <div>
      <TodoCard />
      <CalendarCard />
      <TrackingCard />
    </div>
  );
}
