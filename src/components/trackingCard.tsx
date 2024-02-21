import { Card } from "./card";
import { trackingItems } from "@/data/emails";
import { CIcon } from "@/assets/c-icon";
import { SimpleRow } from "./simpleRow";
import clsx from "clsx";

function TrackingCardItems() {
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
        <SimpleRow key={item.id} id={item.id} title={item.content} label={item.status} />
      ))}
    </div>
  );
}

function LoadingIcon() {
  return (
    <div className="group-hover-spin">
      <CIcon />
    </div>
  );
}

export function TrackingCard() {
  return (
    <Card
      title={"Tracking"}
      body={<TrackingCardItems />}
      colorClass="group-hover:text-blue-500"
      icon={<LoadingIcon />}
    />
  );
}
