import { Card } from "./emailCard";
import { SummaryEmail, Email } from "@/data/emails";
import { EmailRow } from "./emailRow";

export function SummaryCardItems({
  summaryEmails,
}: {
  summaryEmails: SummaryEmail[];
}) {
  return (
    <div className="flex flex-col w-full mt-[20px]">
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
