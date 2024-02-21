"use client"

import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  DragOverlay,
  type DragStartEvent,
  useSensor,
  useSensors,
  KeyboardSensor,
  Announcements,
  UniqueIdentifier,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Card } from "@/components/card";
import { summaryEmails, todos, calendarEvents, trackingItems } from "@/data/emails";
import { SummaryCardItems } from "@/components/summaryCardItems";
import { CalendarCardItems } from "@/components/calendarCardItems";
import { TodoCardItems } from "@/components/todoCardItems";
import { TrackingCardItems } from "@/components/trackingCardItems";
import { Email } from "@/data/emails";
import { useState } from "react";
import { LoadingIcon } from "@/components/trackingCardItems";
import { CalendarIcon } from "@/assets/calendar-icon";
import { PencilIcon } from "@/assets/pencil-icon";

export default function Home() {
  const [emails, setEmails] = useState<Email[]>();
  const [activeEmail, setActiveEmail] = useState<Email | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  return (
    <div className="flex flex-row w-full justify-center grow mt-[50px] gap-[70px]">
      <div className="w-3/5">
        <Card 
          title={"While you were gone..."} 
          body={<SummaryCardItems summaryEmails={summaryEmails} />} 
        />
      </div>
      <div className="w-2/5">
        <Card
          title={"To-do"}
          body={<TodoCardItems todos={todos} />}
          colorClass="group-hover:text-yellow-400"
          icon={<PencilIcon />}
        />
        <Card
          title={"Calendar"}
          body={<CalendarCardItems calendarEvents={calendarEvents} />}
          colorClass="group-hover:text-red-400"
          icon={<CalendarIcon />}
        />
        <Card
          title={"Tracking"}
          body={<TrackingCardItems trackingItems={trackingItems} />}
          colorClass="group-hover:text-blue-500"
          icon={<LoadingIcon />}
        />
      </div>
    </div>
  );
}


// todo:
// - add dragg drop
// - use vh + ratio instead of absolute heights for the three panel
//    - but always keep 4:3:2 ratio and also have exact row heights