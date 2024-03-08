import { friendsEmails } from "@/data/categories";
import { EmailRow } from "@/components/home/emailRow";
import { ReactNode } from "react";

export default function Page() {
  return (
    <>
      {friendsEmails.map((email, index) => {
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
