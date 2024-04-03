// RestaurantCard.tsx
import { BookingCardLabel } from "./bookingCardLabel";
import { BookingCardTitle } from "./bookingCardTitle";
import clsx from "clsx";

export interface RestaurantCardProps {
  restaurantName: string;
  bookingSize: string;
  address: string;
  bookingDate: string;
  bookingTime: string;
  textColor: string;
  highlightColor: string;
}

export function RestaurantCard(props: RestaurantCardProps) {
  const {
    restaurantName,
    bookingSize,
    address,
    bookingDate,
    bookingTime,
    textColor,
    highlightColor,
  } = props;

  return (
    <div className="flex flex-col grow">
      <div className="flex flex-row justify-between items-center mt-[14px]">
        <BookingCardTitle
          title="restaurant"
          content={restaurantName}
          textColor={textColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="flex flex-row justify-between items-center mt-[10px]">
        <BookingCardLabel
          label="size"
          content={bookingSize}
          textColor={textColor}
          highlightColor={highlightColor}
        />
      </div>
      <div className="mt-[8px] blur-[4px]">
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
