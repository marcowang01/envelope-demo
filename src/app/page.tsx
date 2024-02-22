"use client";

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
import { createPortal } from "react-dom";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Card, EmailCard, CardType, EmailCardDragData } from "@/components/home/emailCard";
import {
  summaryEmails,
  todos,
  calendarEvents,
  trackingItems,
  EmailType,
  SummaryEmail,
  TodoEmail,
  CalendarEmail,
  TrackingEmail,
} from "@/data/emails";
import { SummaryCardItems } from "@/components/home/summaryCardItems";
import { CalendarCardItems } from "@/components/home/calendarCardItems";
import { TodoCardItems } from "@/components/home/todoCardItems";
import { TrackingCardItems } from "@/components/home/trackingCardItems";
import { Email } from "@/data/emails";
import { useState } from "react";
import { LoadingIcon } from "@/components/home/trackingCardItems";
import { CalendarIcon } from "@/assets/calendar-icon";
import { PencilIcon } from "@/assets/pencil-icon";
import { EmailRow } from "@/components/home/emailRow";
import { dragOverIsValid } from "@/lib/utils";
import { EmailDragData } from "@/components/home/emailRow";
import { SeenIconDroppable } from "@/components/home/seenIcon";

const defaultCards = [
  { id: "summary", title: "While you were gone..." },
  { id: "todo", title: "To-do" },
  { id: "calendar", title: "Calendar" },
  { id: "tracking", title: "Tracking" },
];

const initialEmails: Email[] = [
  ...summaryEmails,
  ...todos,
  ...calendarEvents,
  ...trackingItems,
];



export default function Home() {
  const [cards, setCards] = useState<Card[]>(defaultCards);
  const [emails, setEmails] = useState<Email[]>(initialEmails);
  const [activeEmail, setActiveEmail] = useState<Email | null>(null);
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  function onDragStart(event: DragStartEvent) {
    // will need to do type chcekcing here for different drop zone
    // something like hasdragglbldata

    const data = event.active.data.current;
    const emailType = data?.type as EmailType;

    if (data) {
      setActiveEmail(data.email);
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveEmail(null);
    setActiveCard(null);

    const { active, over } = event;
    
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;


    if (overId === CardType.Seen) {
      setEmails((emails) => {
        const activeIndex = emails.findIndex((t) => t.id === activeId);
        const activeEmail = emails[activeIndex];
        activeEmail.active = false;
        return emails;
      })
    }

    if (activeId === overId) return;
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    // if (!hasDraggableData(active) || !hasDraggableData(over)) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    const isActiveAnEmail = Object.values(EmailType).includes(activeData?.type);
    const isOverAnEmail = Object.values(EmailType).includes(overData?.type);

    if (!isActiveAnEmail) return;

    if (!dragOverIsValid(activeData as EmailDragData, overData as EmailDragData | EmailCardDragData)) return;

    // Im dropping a email over another email
    if (isActiveAnEmail && isOverAnEmail) {

      console.log(`E: ${activeData?.email.type} email over  ${overData?.email.type} ${overData?.email.sender} email`);

      setEmails((emails) => {
        const activeIndex = emails.findIndex((t) => t.id === activeId);
        const overIndex = emails.findIndex((t) => t.id === overId);
        const activeEmail = emails[activeIndex];
        const overEmail = emails[overIndex];

        if (overEmail && !overEmail.active) {
          activeEmail.active = false;
          return emails;
        }

        if (activeEmail && overEmail && activeEmail.type !== overEmail.type) {
          activeEmail.type = overEmail.type;
          return arrayMove(emails, activeIndex, overIndex - 1);
        }

        return arrayMove(emails, activeIndex, overIndex);
      });
    }

    const isOverACard = overData?.type === "card";

    // Im dropping a email over a Card
    if (isActiveAnEmail && isOverACard) {
      console.log(`C: ${activeData?.email.type} email over ${overData?.card.id} card `);
      setEmails((emails) => {
        const activeIndex = emails.findIndex((t) => t.id === activeId);
        const activeEmail = emails[activeIndex];

        if (over.id === CardType.Seen) {
          activeEmail.active = false;
          return emails;
        }

        if (activeEmail) {
          activeEmail.type = overData.card.id.split("-")[1] as EmailType;
          return arrayMove(emails, activeIndex, activeIndex);
        }

        return emails;
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className="flex flex-row w-full justify-center grow gap-[70px]">
        <div className="w-3/5">
          <EmailCard
            card={{ id: CardType.Summary, title: "While you were gone..." }}
            emailItems={emails.filter(
              (email) => email.type === EmailType.Summary,
            )}
            body={
              <SummaryCardItems
                summaryEmails={
                  emails.filter(
                    (email) => email.type === EmailType.Summary && email.active,
                  ) as SummaryEmail[]
                }
              />
            }
          />
        </div>
        <div className="w-2/5">
          <EmailCard
            card={{ id: CardType.Todo, title: "To-do" }}
            emailItems={emails.filter((email) => email.type === EmailType.Todo)}
            body={
              <TodoCardItems
                todos={
                  emails.filter(
                    (email) => email.type === EmailType.Todo && email.active,
                  ) as TodoEmail[]
                }
              />
            }
            colorClass="group-hover:text-yellow-400"
            icon={<PencilIcon />}
          />
          <EmailCard
            card={{ id: CardType.Calendar, title: "Calendar" }}
            emailItems={emails.filter(
              (email) => email.type === EmailType.Calendar && email.active,
            )}
            body={
              <CalendarCardItems
                calendarEvents={
                  emails.filter(
                    (email) => email.type === EmailType.Calendar && email.active,
                  ) as CalendarEmail[]
                }
              />
            }
            colorClass="group-hover:text-red-400"
            icon={<CalendarIcon />}
          />
          <EmailCard
            card={{ id: CardType.Tracking, title: "Tracking" }}
            emailItems={emails.filter(
              (email) => email.type === EmailType.Tracking && email.active,
            )}
            body={
              <TrackingCardItems
                trackingItems={
                  emails.filter(
                    (email) => email.type === EmailType.Tracking && email.active,
                  ) as TrackingEmail[]
                }
              />
            }
            colorClass="group-hover:text-blue-500"
            icon={<LoadingIcon />}
          />
        </div>
        <SeenIconDroppable 
          emailItems={emails.filter((email) => email.active === false)}
        />
      </div>
      {typeof window !== "undefined" && "document" in window &&
        createPortal(
          <DragOverlay>
            {/* {activeColumn && (
                <BoardColumn
                  isOverlay
                  column={activeColumn}
                  tasks={tasks.filter(
                    (task) => task.columnId === activeColumn.id
                  )}
                />
              )} */}
            {activeEmail &&
              (activeEmail.type === EmailType.Summary ||
                activeEmail.type === EmailType.Todo) && (
                <EmailRow
                  email={activeEmail}
                  sender={activeEmail.sender || ""}
                  title={activeEmail.title || ""}
                  gapClass={"gap-[40px]"}
                  actions={["view", "edit"]}
                  isOverlay
                />
              )}
          </DragOverlay>,
          document.body,
        )}
    </DndContext>
  );
}

// todo:
// - add drag drop style
// - add autocomplete for email
