import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { Email } from "@/data/emails";
import { EmailType } from "@/data/emails";
import { EmailDragData } from "./emailRow";
import clsx from "clsx";

export function SimpleRow({
  title,
  label,
  id,
  email,
  isOverlay,
}: {
  title: string;
  label: string;
  id: UniqueIdentifier;
  email: Email;
  isOverlay?: boolean;
}) {
  const payload: EmailDragData = {
    type: email.type,
    email: email,
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: payload,
  });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        "flex flex-row justify-between items-center w-full py-[8px] rounded-xl",
        {
          "bg-gray-350 w-fit px-[20px] gap-0 backdrop-blur-sm bg-opacity-50":
            isOverlay,
          "opacity-100 bg-gray-300 text-black": isDragging && !isOverlay,
          "w-full": !isOverlay && !isDragging,
        },
      )}
      {...attributes}
      {...listeners}
    >
      <div className="font-normal text-base  text-gray-500">{title}</div>
      <div className="font-light text-xs  text-gray-450 italic">{label}</div>
    </div>
  );
}
