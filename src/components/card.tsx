import clsx from "clsx";
import { ReactNode } from "react";
import { useDndContext, type UniqueIdentifier } from "@dnd-kit/core";

export interface Card {
  id: UniqueIdentifier;
  title: string;
}


export function EmailCard({
  card,
  body,
  colorClass,
  icon,
}: {
  card: Card;
  body: ReactNode;
  colorClass?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="group w-full">
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
      <div className="w-full mb-[40px]">{body}</div>
    </div>
  );
}
