import { Card } from "./card";
import { summaryItems } from "@/data/emails";

function SummaryCardItems() {
  return(
    <div>
      Summary
    </div>
  )
}

export function SummaryCard() {
  return (
    <Card
      title={"While you were gone..."}
      body={<SummaryCardItems />}
      colorClass="text-gray-500"
    />
  )
}