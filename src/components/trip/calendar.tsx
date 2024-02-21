"use client"
import { useState } from "react";

export function Calendar() {
  // april 12 2024 iso string
  const [activeDay, setActiveDay] = useState("2024-04-12T00:00:00.000Z")

  return (
    <div>
      Calendar
    </div>
  )
}