import { Card } from "./card";
import { trackingItems } from "@/data/emails";
import { CIcon } from "@/assets/c-icon";

function TrackingCardItems() {
  return <div>tracking things</div>;
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
