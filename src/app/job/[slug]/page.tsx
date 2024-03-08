import { newsletterEmails } from "@/data/categories";
import { SummaryEmail } from "@/data/emails";
import { EmailRow } from "@/components/home/emailRow";
import { Wrapper } from "../page";

export default function Page({ params }: { params: { slug: string } }) {
  let emails:SummaryEmail[] = []
  if (params.slug.toLowerCase().includes("benedict") || params.slug.toLowerCase().includes("evans")) {
    emails = newsletterEmails.filter((email) => email.sender.toLowerCase().includes("benedict"))
  }

  return (
    <Wrapper>
        {emails.map((email, index) => {
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
    </Wrapper>
  );
}
