import { EmailRow } from "@/components/home/emailRow";
import { jobEmails } from "@/data/categories";

export default function Page() {
  return (
    <>
      {jobEmails.map((email, index) => {
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
