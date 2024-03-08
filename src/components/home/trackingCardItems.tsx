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
        "flex flex-col justify start mt-[20px] h-[calc((100vh-549px)*0.30)] max-h-[160px] overflow-y-auto",
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

export function LoadingIcon({ className }: { className?: string }) {
  return (
    <div className={clsx("group-hover-spin", className)}>
      <CIcon />
    </div>
  );
}
