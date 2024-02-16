import { Card } from "./card";
import { summaryItems } from "@/data/emails";
import { EmailRow } from "./emailRow";

function SummaryCardItems() {
  return(
    <div className="flex flex-col gap-[20px] w-full">
      {summaryItems.map((email, index) => {
        return (
          <EmailRow
            key={`summary-${index}`}
            sender={email.sender}
            title={email.title}
            date={email.date}
            gapClass={"gap-[40px]"}
            actions={["view", "edit"]}
          />
        )
      })}
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