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

function loadingIcon(){

  return (
    <div>
      <CIcon />
    </div>
  )
}

export function TrackingCard() {
  return (
    <Card
      title={"Tracking"}
      body={<TrackingCardItems />}
      colorClass="group-hover:text-blue-500"
      icon={<CIcon />}
    />
  )
}