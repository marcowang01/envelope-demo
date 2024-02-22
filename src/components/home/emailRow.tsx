"use client"

import { CheckIcon } from "@/assets/check-icon";
import { EyeIcon } from "@/assets/eye-icon";
import { PencilIcon } from "@/assets/pencil-icon";
import clsx from "clsx";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import { formatDate } from "@/lib/utils";
import { Email } from "@/data/emails";
import { EmailType } from "@/data/emails";

export interface EmailDragData {
  type: EmailType;
  email: Email;
};

export function EmailRow({
  email,
  sender,
  title,
  gapClass,
  actions,
  isOverlay,
}: {
  email: Email;
  sender: string;
  title: string;
  gapClass: string;
  actions: string[];
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
    id: email.id,
    data: payload
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const variants = cva("", {
    variants: {
      dragging: {
        // style of the email row that is overlaying the actual position
        over: "opacity-30 bg-gray-100",
        // style of the email row that is currenlt being dragged
        overlay: "bg-gray-100",
      },
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        "group/row italic text-gray-450  flex flex-row font-xl w-full cursor-grab py-[10px] rounded-[10px]",
        gapClass,
        variants({
          dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
        }),
      )}
      // style={style}
      {...attributes}
      {...listeners}
    >
      <div className=" font-bold cursor-pointer group-hover/row:text-gray-800 group-active/row:text-gray-500 w-[85px]">
        {sender}
      </div>
      <div className={clsx("grow flex flex-row justify-between items-center  group-hover/row:text-gray-800  group-active/row:text-gray-500  cursor-pointer")}>
        <div className={clsx({
          "grow": !isOverlay,
        })}>{title}</div>
        {email.type === "summary" && (
          <div className={clsx({
            "hidden": isOverlay,
          })}>{formatDate(new Date(email.date))}</div>
        )}
      </div>

      <div className={clsx("flex flex-row justify-start gap-[20px] items-center ",{
        "hidden": isOverlay
      
      })}>
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
