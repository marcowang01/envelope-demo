import { Card } from "./card";
import { SummaryEmail } from "@/data/emails";
import { EmailRow } from "./emailRow";

export function SummaryCardItems(
  { summaryEmails } : { summaryEmails: SummaryEmail[] }
) {
  return (
    <div className="flex flex-col gap-[20px] w-full mt-[30px]">
      {summaryEmails.map((email, index) => {
        return (
          <EmailRow
            key={`summary-${index}`}
            id={email.id}
            sender={email.sender}
            title={email.title}
            date={email.date}
            gapClass={"gap-[40px]"}
            actions={["view", "edit"]}
          />
        );
      })}
    </div>
  );
}

