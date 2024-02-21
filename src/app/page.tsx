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
import { SummaryCard } from "@/components/summaryCard";
import { CalendarCard } from "@/components/calendarCard";
import { TodoCard } from "@/components/todoCard";
import { TrackingCard } from "@/components/trackingCard";

export default function Home() {
  return (
    <div className="flex flex-row w-full justify-center grow mt-[50px] gap-[70px]">
      <div className="w-3/5">
        <SummaryCard />
      </div>
      <div className="w-2/5">
        <TodoCard />
        <CalendarCard />
        <TrackingCard />
      </div>
    </div>
  );
}


// todo:
// - add dragg drop
// - use vh + ratio instead of absolute heights for the three panel
//    - but always keep 4:3:2 ratio and also have exact row heights