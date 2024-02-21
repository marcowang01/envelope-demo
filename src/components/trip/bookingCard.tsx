import { ReactNode } from "react"
import { BookingCardTitle } from "./bookingCardTitle"
import { BookingCardLabel } from "./bookingCardLabel"
import clsx from "clsx"

export function BookingCard({ 
  logo,
  date,
  bgColor,
  textColor,
  highlightColor,
  children
}: { 
  logo: ReactNode,
  date: string,
  bgColor: string,
  textColor: string,
  highlightColor: string,
  children: ReactNode
}) {
  return (
    <div className={clsx("w-[175px] h-[200px] rounded-[25px] bg-blue-200 px-[17px] pb-[17px] flex flex-col", bgColor)}>
      <div className="relative w-full flex flex-row justify-between items-end">
        <div className="relative">
          {logo}
        </div>
        <div className="flex-shrink-0">
          <BookingCardLabel
            label="date"
            content={date}
            textColor={textColor}
            highlightColor={highlightColor}
            extraStyles="text-right mt-[23px]"
          />
        </div>
      </div>
      <div className="flex flex-col grow">
        {children}
      </div>
    </div>
  )
}