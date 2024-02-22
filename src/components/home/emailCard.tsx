"use client";

import clsx from "clsx";
import { ReactNode, useMemo } from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import {
  useDndContext,
  type UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import { Email } from "@/data/emails";
import { useState } from "react";

export interface Card {
  id: UniqueIdentifier;
  title: string;
}

export enum CardType {
  Summary = "card-summary",
  Todo = "card-todo",
  Calendar = "card-calendar",
  Tracking = "card-tracking",
  Seen = "card-seen",
}

export interface EmailCardDragData {
  type: CardType;
  card: Card;
}

export function EmailCard({
  card,
  emailItems,
  body,
  titleColorClass,
  isDragging,
  icon,
}: {
  card: Card;
  emailItems: Email[];
  body: ReactNode;
  titleColorClass?: string;
  isDragging: boolean;
  icon?: ReactNode;
}) {

  const emailIds = useMemo(() => {
    return emailItems.map((email) => email.id);
  }, [emailItems]);

  const payload: EmailCardDragData = {
    type: card.id as CardType,
    card: card,
  };

  const { 
    setNodeRef,
   } = useDroppable({
    id: card.id,
    data: payload,
  });


  return (
    <div 
      ref={setNodeRef} 
      className={clsx("group w-full", {
        "opacity-50": isDragging,
      })}
    >
      <div
        className={clsx(
          "text-3xl font-light mb-[20px] flex flex-row justify-start items-center gap-[10px]",
          titleColorClass ? titleColorClass : "text-gray-450"
        )}
      >
        {icon && <div className="w-[20px]">{icon}</div>}
        {card.title}
      </div>
      <div className="w-full h-[1px] bg-gray-350" />
      <div className="w-full mb-[40px]">
        <SortableContext items={emailIds}>{body}</SortableContext>
      </div>
    </div>
  );
}
