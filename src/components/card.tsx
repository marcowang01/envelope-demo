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
export interface Card {
  id: UniqueIdentifier;
  title: string;
}

export function EmailCard({
  card,
  emailItems,
  body,
  colorClass,
  icon,
}: {
  card: Card;
  emailItems: Email[];
  body: ReactNode;
  colorClass?: string;
  icon?: ReactNode;
}) {
  const emailIds = useMemo(() => {
    return emailItems.map((email) => email.id);
  }, [emailItems]);

  const { setNodeRef } = useDroppable({
    id: card.id,
    data: {
      type: "card",
      card: card,
    },
  });

  return (
    <div ref={setNodeRef} className="group w-full">
      <div
        className={clsx(
          "text-3xl font-light mb-[20px] flex flex-row justify-start items-center gap-[10px] text-gray-500",
          colorClass,
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
