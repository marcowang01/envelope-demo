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
import { Card, EmailCard } from "@/components/card";
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

const defaultCards = [
  { id: "summary", title: "While you were gone..." },
  { id: "todo", title: "To-do" },
  { id: "calendar", title: "Calendar" },
  { id: "tracking", title: "Tracking" },
]

const initialEmails: Email[] = [
  ...summaryEmails,
  ...todos,
  ...calendarEvents,
  ...trackingItems
]

export default function Home() {
  const [cards, setCards] = useState<Card[]>(defaultCards);
  const [emails, setEmails] = useState<Email[]>(initialEmails);
  const [activeEmail, setActiveEmail] = useState<Email | null>(null);
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  return (
    <div className="flex flex-row w-full justify-center grow mt-[50px] gap-[70px]">
      <div className="w-3/5">
        <EmailCard 
          card={{ id: "summary", title: "While you were gone..." }}
          body={<SummaryCardItems summaryEmails={summaryEmails} />} 
        />
      </div>
      <div className="w-2/5">
        <EmailCard
          card={{ id: "todo", title: "To-do" }}
          body={<TodoCardItems todos={todos} />}
          colorClass="group-hover:text-yellow-400"
          icon={<PencilIcon />}
        />
        <EmailCard
          card={{ id: "calendar", title: "Calendar" }}
          body={<CalendarCardItems calendarEvents={calendarEvents} />}
          colorClass="group-hover:text-red-400"
          icon={<CalendarIcon />}
        />
        <EmailCard
          card={{ id: "tracking", title: "Tracking" }}
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