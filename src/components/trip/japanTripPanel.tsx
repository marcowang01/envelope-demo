import { BookingCard } from "./bookingCard"
import { Calendar } from "./calendar"

export function JapanTripPanel() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-3xl font-light mb-[20px]">
        Bookings for your April Trip to Japan
      </div>
      <div className="w-full h-[1px] bg-gray-350 mb-[30px]" />
      <div className="flex flex-row gap-[20px] mb-[30px]">
        <BookingCard title="ANA" />
        <BookingCard title="Opentable" />
        <BookingCard title="Airbnb" />
        <BookingCard title="2121" />
      </div>
      <div className="w-full h-[1px] bg-gray-350 mb-[30px]" />

      <div className="w-full grow flex flex-row justify-between gap-[139px]">
        <div className="text-4xl font-light mb- text-gray-500">
          april
        </div>
        <div className="w-full">
          <Calendar />
        </div>
      </div>
    </div>
  )
}