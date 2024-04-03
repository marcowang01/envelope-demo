"use client";

import { useState } from "react";
import { CalendarCell } from "./calendar-cell";
import { japan } from "@/data/calendar";

export function Calendar() {
  // april 12 2024 iso string
  const [activeDay, setActiveDay] = useState("2024-04-13T00:00:00.000Z");

  // april 1 2024 iso string
  const startDay = new Date("2024-04-01T00:00:00.000Z");
  // june 1 2024 iso string - not included in the calendar, so the last day is May 31
  const endDay = new Date("2024-06-01T00:00:00.000Z");
  endDay.setDate(endDay.getDate() - 1); // Adjust to include May 31

  const days = [];
  for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  // Calculate how many empty cells we need at the start of the first row based on the day of the week of April 1st
  // (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const emptyCellsStart = startDay.getDay();

 const totalRows = Math.ceil((emptyCellsStart + days.length) / 7);

  return (
    <div className="flex flex-wrap">
      {Array.from({ length: emptyCellsStart }).map((_, index) => (
        <div key={`empty-start-${index}`} className="w-[130px] h-[130px]"></div>
      ))}
{days.map((day, index) => {
  const totalDays = emptyCellsStart + days.length;
  const dayIndex = index + emptyCellsStart; // Adjust index by the empty cells at the start
  const isFirstCol = dayIndex % 7 === 0; // First column (start of the week)
  const isLastCol = (dayIndex + 1) % 7 === 0; // Last column (end of the week)
  const isFirstRow = index < 7; // First row in the calendar
  const isLastRow = index >= totalDays - 7; // Last row in the calendar

  // Use custom CSS or Tailwind's closest approximation
  let borderClasses = "border";
  borderClasses += isFirstCol ? "mt-[-0.5px]" : "ml-[-0.5px]"; // Always apply top margin, adjust if Tailwind supports 0.5px
  // borderClasses += isLastCol ? "border-r " : "border-r "; // Always apply right border, adjust if Tailwind supports 0.5px
  borderClasses += isFirstRow ? "ml-[-0.5px]" : "mt-[-0.5px]"; // Always apply top border
  // borderClasses += isLastRow ? "border-b " : "border-b "; // Always apply bottom border

  // Note: Tailwind CSS does not support 0.5px borders directly. You might need to create custom utility classes for this.
  // As a workaround, this example treats all borders equally for demonstration, but you should adjust according to your project's needs.

  return (
    <CalendarCell
      key={index}
      date={day.toISOString()}
      style={borderClasses}
      isSelected={false}
      row={Math.floor(dayIndex / 7)}
      col={dayIndex % 7}
      events={japan[day.toISOString()] || []}
    />
  );
})}

    </div>
  );
}
