"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { SeenIcon } from "@/assets/seen-icon";
import { useMemo } from "react";
import { Email } from "@/data/emails";
import { CardType, EmailCardDragData } from "./emailCard";
import { EmailRow } from "./emailRow";
import clsx from "clsx";

export function SeenIconDroppable({
  emailItems,
  colorClass,
}: {
  emailItems: Email[];
  colorClass: string;
}) {
  const emailIds = useMemo(() => {
    return emailItems.map((email) => email.id);
  }, [emailItems]);

  const payload: EmailCardDragData = {
    type: CardType.Seen,
    card: {
      id: CardType.Seen,
      title: "Seen",
    },
  };

  const { setNodeRef } = useDroppable({
    id: CardType.Seen,
    data: payload,
  });

  return (
    <div
      className={clsx(
        "fixed left-[calc(50% - 30px)] bottom-[50px] z-20",
        colorClass,
      )}
      ref={setNodeRef}
    >
      <SortableContext items={emailIds}>
        <SeenIcon />
        {/* {emailItems.map((email, index) => {
          return (
            <EmailRow
              key={`seen-${index}`}
              email={email}
              sender={email.sender || 'Unknown' }
              title={email.title || 'No Title'}
              gapClass={"gap-[40px]"}
              actions={[]}
            />
          );})} */}
      </SortableContext>
    </div>
  );
}
