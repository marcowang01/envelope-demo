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
import { summaryEmails, todos, calendarEvents, trackingItems, EmailType, SummaryEmail, TodoEmail, CalendarEmail, TrackingEmail } from "@/data/emails";
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

  function onDragStart(event: DragStartEvent) {
    // will need to do type chcekcing here for different drop zone
    // something like hasdragglbldata

    const data = event.active.data.current;
    const emailType = data?.type as EmailType

    if (data && emailType === "summary") {
      setActiveEmail(data.email);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveEmail(null);
    setActiveCard(null);

    const { active, over } = event;
    if (!over) return

    const activeId = active.id;
    const overId = over.id;

    // if (!hasDraggableData(active)) return;

    const activeData = active.data.current;

    if (activeId === overId) return;
  }

  function onDragOver(event: DragOverEvent) {
    const { over } = event;
    if (!over) return;

    const overId = over.id;
    const overData = over.data.current;

    if (overData?.type === "card") {
      setActiveCard(overData.card);
    }
  }


  return (
    <div className="flex flex-row w-full justify-center grow mt-[50px] gap-[70px]">
      <div className="w-3/5">
        <EmailCard 
          card={{ id: "summary", title: "While you were gone..." }}
          body={<SummaryCardItems summaryEmails={emails.filter(email => email.type === "summary") as SummaryEmail[]} />}
        />
      </div>
      <div className="w-2/5">
        <EmailCard
          card={{ id: "todo", title: "To-do" }}
          body={<TodoCardItems todos={emails.filter(email => email.type === "todo") as TodoEmail[]} />}
          colorClass="group-hover:text-yellow-400"
          icon={<PencilIcon />}
        />
        <EmailCard
          card={{ id: "calendar", title: "Calendar" }}
          body={<CalendarCardItems calendarEvents={emails.filter(email => email.type === "calendar") as CalendarEmail[]} />}
          colorClass="group-hover:text-red-400"
          icon={<CalendarIcon />}
        />
        <EmailCard
          card={{ id: "tracking", title: "Tracking" }}
          body={<TrackingCardItems trackingItems={emails.filter(email => email.type === "tracking") as TrackingEmail[]} />}
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