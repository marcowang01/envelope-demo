"use client";

import { BookingCard } from "./bookingCard";
import { Calendar } from "./calendar";
import { FlightCard } from "./FlightCard";
import { RestaurantCard } from "./restaurantCard";
import { StayCard } from "./stayCard";
import { MuseumCard } from "./museumCard";
import { AnaLogo, MuseumIcon, OpentableLogo, AirbnbLogo } from "./icons";

export function JapanTripPanel() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-3xl font-light mb-[20px]">
        Bookings for your April Trip to Japan
      </div>
      <div className="w-full h-[1px] bg-gray-350 mb-[30px]" />
      <div className="flex flex-row gap-[20px] mb-[30px]">
        <BookingCard
          logo={<AnaLogo />}
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
        <BookingCard
          logo={<OpentableLogo />}
          date={"04 APR 6 PM"}
          bgColor={"bg-[#DB3644]"}
          textColor={"text-[#FFFFFF]"}
          highlightColor={"text-[#FFFFFF]"}
        >
          <RestaurantCard
            restaurantName="UDON SHIN"
            bookingSize="4 PEOPLE"
            address="〒151-0053 Tokyo, Shibuya City, Yoyogi, 2 Chome−20−16 相馬ビル １F"
            bookingDate="04 APR"
            bookingTime="6 PM"
            textColor="text-[#FFFFFF]"
            highlightColor="text-[#FFFFFF]"
          />
        </BookingCard>
        <BookingCard
          logo={<AirbnbLogo />}
          date={"04 APR - 10 APR"}
          bgColor={"bg-[#FFFFFF] shadow-border-pink"}
          textColor={"text-[#8F8F8F]"}
          highlightColor={"text-[#FF5A5F]"}
        >
          <StayCard
            stayPlace="STAY IN MEGURO"
            guests={4}
            address="295-1259, Marunochi Gurantokyo Nosutawa(28-kai), Chiyoda-ku, Tokyo"
            textColor="text-[#8F8F8F]"
            highlightColor="text-[#FF5A5F]"
          />
        </BookingCard>
        <BookingCard
          logo={<MuseumIcon />}
          date={"05 APR 10 AM"}
          bgColor={"bg-[#F4F4F4]"}
          textColor={"text-[#8F8F8F]"}
          highlightColor={"text-[#0090DF]"}
        >
          <MuseumCard
            ticketCount={4}
            openingHours="10 AM - 6 PM"
            address="1 Chome-1-1 Oshiage, Sumida City, Tokyo 131-0045, Japan"
            textColor="text-[#8F8F8F]"
            highlightColor="text-[#0090DF]"
          />
        </BookingCard>
      </div>
      <div className="w-full h-[1px] bg-gray-350 mb-[30px]" />

      <div className="w-full grow flex flex-row justify-between gap-[139px]">
        <div className="text-4xl font-light mb- text-gray-500">april</div>
        <div className="w-full">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
