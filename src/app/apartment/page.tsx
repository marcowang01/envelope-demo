import { apartmentEmails } from "@/data/categories";
import { EmailRow } from "@/components/home/emailRow";

export default function Page() {
  return (
    <div>
      {apartmentEmails.map((email, index) => {
        return (
          <EmailRow
            key={`summary-${index}`}
            email={email}
            sender={email.sender}
            title={email.title}
            gapClass={"gap-[50px]"}
            actions={["view", "edit"]}
          />
        );
      })}
    </div>
  );
}
