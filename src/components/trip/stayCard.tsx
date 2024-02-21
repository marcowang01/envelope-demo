import { BookingCardLabel } from "./bookingCardLabel";
import { BookingCardTitle } from "./bookingCardTitle";
import clsx from "clsx";

export interface StayCardProps {
  stayPlace: string;
  guests: number;
  address: string;
  textColor: string;
  highlightColor: string;
}

export function StayCard(props: StayCardProps) {
  const { stayPlace, guests, address, textColor, highlightColor } = props;

  return (
    <div className="flex flex-col grow mt-[14px]">
      <BookingCardTitle
        title="stay"
        content={stayPlace}
        textColor={textColor}
        highlightColor={highlightColor}
      />
      <div className="mt-[15px]">
      <BookingCardLabel
        label="guests"
        content={`${guests} PEOPLE`}
        textColor={textColor}
        highlightColor={highlightColor}
      />
      </div>
      <div className="mt-[8px]">
      <BookingCardLabel
        label="address"
        content={address}
        textColor={textColor}
        highlightColor={highlightColor}
      />
      </div>
    </div>
  );
}