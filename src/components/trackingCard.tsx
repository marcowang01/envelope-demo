import { Card } from "./card";
import { trackingItems } from "@/data/emails";
import { CIcon } from "@/assets/c-icon";

function TrackingCardItems() {
  return(
    <div>
      tracking things
    </div>
  )
}

export function TrackingCard() {
  return (
    <Card
      title={"To-do"}
      body={<TrackingCardItems />}
      colorClass="text-blue-500"
      icon={<CIcon />}
    />
  )
}