"use client";

import clsx from "clsx";
import { ReactNode, useMemo } from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import {
  useDndContext,
  type UniqueIdentifier,
  useDroppable,
} from "@dnd-kit/core";
import { Email, EmailType, SummaryEmail } from "@/data/emails";
import { useState } from "react";
import { Card, CardType, EmailCardDragData } from "@/components/home/emailCard";
import { SummaryCardItems } from "./summaryCardItems";
import { FilterIcon, FilterXIcon } from "@/assets/filter-icon";

export function ExpandCard({
  card,
  emailItems,
  titleColorClass,
  isDragging,
}: {
  card: Card;
  emailItems: Email[];
  titleColorClass?: string;
  isDragging: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const emailIds = useMemo(() => {
    if (isExpanded) {
      return emailItems.map((email) => email.id);
    } else if (card.id === CardType.Summary) {
      return emailItems.filter((email) => !email.spam).map((email) => email.id);
    } else {
      return emailItems.map((email) => email.id);
    }
  }, [emailItems, isExpanded]);

  const payload: EmailCardDragData = {
    type: card.id as CardType,
    card: card,
  };

  const { setNodeRef } = useDroppable({
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
          "text-3xl font-light mb-[20px] flex flex-row justify-between items-end gap-[10px]",
          titleColorClass ? titleColorClass : "text-gray-450",
        )}
      >
        {card.title}
        <div
          className="flex flex-row items-center gap-[10px] cursor-pointer w-[20px]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <FilterIcon /> : <FilterXIcon />}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-350" />
      <div className="w-full mb-[40px]">
        <SortableContext items={emailIds}>
          <SummaryCardItems
            filtered={!isExpanded}
            summaryEmails={
              emailItems.filter(
                (email) => email.type === EmailType.Summary && email.active,
              ) as SummaryEmail[]
            }
          />
        </SortableContext>
      </div>
    </div>
  );
}
