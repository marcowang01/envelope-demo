import { BookingCard } from "./bookingCard"
import { Calendar } from "./calendar"
import { FlightCard } from "./FlightCard"
import { AnaIconAdjusted } from "@/assets/ana-icon"
import { OpentableIcon } from "@/assets/opentable-icon"
import { AirbnbIcon } from "@/assets/airbnb-icon"
import { MuseumIcon } from "@/assets/Museum-icon"

export function JapanTripPanel() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-3xl font-light mb-[20px]">
        Bookings for your April Trip to Japan
      </div>
      <div className="w-full h-[1px] bg-gray-350 mb-[30px]" />
      <div className="flex flex-row gap-[20px] mb-[30px]">
        <BookingCard
          logo={<AnaIconAdjusted />}
          date={"03 APR 5 PM"}
          bgColor={"bg-[#D4E5EF]"}
          textColor={"text-[#1F3460]"}
          highlightColor={"text-[#2E4C8C]"}
        >
          <FlightCard
            arrivalAirport="HND"
            arrivalCity="Tokyo (HANEIDA)"
            departureAirport="JFK"
            departureCity="New York (JFK)"
            flightNumber="NH0211"
            seat="(E)25A"
            boardGroup="GROUP 3"
            passengerName="SHOABO/ZHANG MR"
            recordLocator="1GR3EN"
            textColor="text-[#1F3460]"
            highlightColor="text-[#2E4C8C]"
          />
        </BookingCard>
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
