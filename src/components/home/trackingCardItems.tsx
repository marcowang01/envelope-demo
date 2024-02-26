import { Card } from "./emailCard";
import { TrackingEmail, Email } from "@/data/emails";
import { CIcon } from "@/assets/c-icon";
import { SimpleRow } from "./simpleRow";
import clsx from "clsx";

export function TrackingCardItems({
  trackingItems,
}: {
  trackingItems: TrackingEmail[];
}) {
  return (
    // 120 is exactly 3 rows of 40px
    <div
      className={clsx(
        "flex flex-col gap-[16px] justify start mt-[20px] h-[120px] overflow-y-auto",
        {
          "pr-[8px]": trackingItems.length > 3,
        },
      )}
    >
      {trackingItems.map((item) => (
        <SimpleRow
          key={item.id}
          id={item.id}
          title={item.content}
          label={item.status}
          email={item as Email}
        />
      ))}
    </div>
  );
}

export function LoadingIcon() {
  return (
    <div className="group-hover-spin">
      <CIcon />
    </div>
  );
}
