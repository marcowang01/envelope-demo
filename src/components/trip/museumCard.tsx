import { BookingCardLabel } from "./bookingCardLabel";
import { BookingCardTitle } from "./bookingCardTitle";

export interface MuseumCardProps {
  ticketCount: number;
  openingHours: string;
  address: string;
  textColor: string;
  highlightColor: string;
}

export function MuseumCard(props: MuseumCardProps) {
  const { ticketCount, openingHours, address, textColor, highlightColor } =
    props;

  return (
    <div className="flex flex-col grow mt-[14px]">
      <BookingCardTitle
        title="admission"
        content={`TICKET FOR ${ticketCount}`}
        textColor={textColor}
        highlightColor={highlightColor}
      />
      <div className="mt-[15px]">
        <BookingCardLabel
          label="opening hours"
          content={openingHours}
          textColor={textColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="mt-[15px]">
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
