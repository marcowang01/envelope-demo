import { newsletterEmails } from "@/data/categories";
import { EmailRow } from "@/components/home/emailRow";

export default function Page() {
  return (
    <>
      {newsletterEmails.map((email, index) => {
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
    </>
  );
}
