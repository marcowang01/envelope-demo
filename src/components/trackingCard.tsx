import { Card } from "./card";
import { trackingItems } from "@/data/emails";
import { CIcon } from "@/assets/c-icon";
import { SimpleRow } from "./simpleRow";

function TrackingCardItems() {
  return (
    <div className="flex flex-col gap-4 justify start mt-[20px]">
      {trackingItems.map((item) => (
        <SimpleRow 
          key={item.id}
          title={item.item}
          label={item.status}
        />
      ))}
    </div>
  )
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
