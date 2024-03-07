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

  return (
    <div className="flex flex-wrap">
      {Array.from({ length: emptyCellsStart }).map((_, index) => (
        <div key={`empty-start-${index}`} className="w-[130px] h-[130px]"></div>
      ))}
      {days.map((day, index) => {
        return (
        <CalendarCell
          key={index}
          date={day.toISOString()}
          // isSelected={activeDay === day.toISOString()}
          isSelected={false}
          row={Math.floor(index / 7)}
          col={index % 7}
          events={japan[day.toISOString()] || []}
        />
      )})}
    </div>
  );
}
