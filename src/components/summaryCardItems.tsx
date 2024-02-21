import { Card } from "./card";
import { SummaryEmail, Email } from "@/data/emails";
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
            email={email as Email}
            sender={email.sender}
            title={email.title}
            gapClass={"gap-[40px]"}
            actions={["view", "edit"]}
          />
        );
      })}
    </div>
  );
}

