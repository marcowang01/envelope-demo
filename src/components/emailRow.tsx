import { CheckIcon } from "@/assets/check-icon";
import { EyeIcon } from "@/assets/eye-icon";
import { PencilIcon } from "@/assets/pencil-icon";
import clsx from "clsx";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { formatDate } from "@/lib/util";

export function EmailRow({
  id,
  sender,
  title,
  date,
  gapClass,
  actions,
  isOverlay,
}: {
  id: UniqueIdentifier;
  sender: string;
  title: string;
  date?: string;
  gapClass: string;
  actions: string[];
  isOverlay?: boolean;
}) {

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      date: date,
    } 
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const variants = cva("", {
    variants: {
      dragging: {
        over: "ring-2 opacity-30",
        overlay: "ring-2 ring-primary",
      },
    },
  });


  return (
    <div
      className={clsx(
        "italic text-gray-450  flex flex-row font-xl w-full cursor-grab",
        gapClass,
        variants({
          dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
        })
      )}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="font-bold cursor-pointer hover:text-gray-800 active:text-gray-500 w-[85px]">
        {sender}
      </div>
      <div className="grow flex flex-row justify-between items-center  hover:text-gray-800  active:text-gray-500  cursor-pointer">
        <div className="grow ">{title}</div>
        {date && <div>{formatDate(new Date(date))}</div>}
      </div>

      <div className="flex flex-row justify-start gap-[20px] items-center ">
        {actions.includes("view") && (
          <div className="cursor-pointer hover:text-gray-800 active:text-gray-500 w-[20px]">
            <EyeIcon />
          </div>
        )}
        {actions.includes("edit") && (
          <div className="cursor-pointer hover:text-gray-800 active:text-gray-500 w-[18px]">
            <PencilIcon />
          </div>
        )}
        {actions.includes("check") && (
          <div className="cursor-pointer hover:text-gray-800 active:text-gray-500">
            <CheckIcon />
          </div>
        )}
      </div>
    </div>
  );
}
