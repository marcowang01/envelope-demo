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
    <div className={clsx("w-[175px] h-[200px] rounded-[25px] px-[17px] pb-[17px] flex flex-col", bgColor)}>
      <div className="w-full flex flex-row justify-between items-end h-[41px] flex-shrink-0">
        {logo}
        <div className="flex-shrink-0">
          <BookingCardLabel
            label="date"
            content={date}
            textColor={textColor}
            highlightColor={highlightColor}
            extraStyles="text-right"
          />
        </div>
      </div>
      <div className="flex flex-col grow">
        {children}
      </div>
    </div>
  )
}