import { BookingCardLabel } from "./bookingCardLabel";
import { BookingCardTitle } from "./bookingCardTitle";
import { PlaneIcon } from "@/assets/plane-icon";
import clsx from "clsx";
export interface FlightCardProps {
  arrivalAirport: string;
  arrivalCity: string;
  departureAirport: string;
  departureCity: string;
  flightNumber: string;
  seat: string;
  boardGroup: string;
  passengerName: string;
  recordLocator: string;
  textColor: string;
  highlightColor: string;
}

export function FlightCard(props: FlightCardProps) {
  const {
    arrivalAirport,
    arrivalCity,
    departureAirport,
    departureCity,
    flightNumber,
    seat,
    boardGroup,
    passengerName,
    recordLocator,
    textColor,
    highlightColor,
  } = props;

  return (
    <div className="flex flex-col grow">
      <div className="flex flex-row justify-between items-center mt-[14px]">
        <BookingCardTitle
          title={departureCity}
          content={`${departureAirport}`}
          textColor={textColor}
          highlightColor={highlightColor}
        />
        <div className={clsx(highlightColor)}>
          <PlaneIcon />
        </div>
        <BookingCardTitle
          title={arrivalCity}
          content={`${arrivalAirport}`}
          textColor={textColor}
          highlightColor={highlightColor}
          extraStyles="text-right"
        />
      </div>
      {/* labels for flight, seat, group */}
      <div className="flex flex-row justify-between items-center mt-[10px]">
        <BookingCardLabel
          label="flight"
          content={flightNumber}
          textColor={textColor}
          highlightColor={highlightColor}
        />
        <BookingCardLabel
          label="seat"
          content={seat}
          textColor={textColor}
          highlightColor={highlightColor}
        />
        <BookingCardLabel
          label="group"
          content={boardGroup}
          textColor={textColor}
          highlightColor={highlightColor}
        />
      </div>
      {/* label for passenger */}
      <div className="mt-[8px]">
        <BookingCardLabel
          label="passenger"
          content={passengerName}
          textColor={textColor}
          highlightColor={highlightColor}
        />
      </div>
      {/* title for record locator */}
      <div className="mt-[8px]">
        <BookingCardTitle
          title="confirmation"
          content={recordLocator}
          textColor={textColor}
          highlightColor={highlightColor}
        />
      </div>
    </div>
  );
}
