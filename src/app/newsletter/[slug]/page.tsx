import { newsletterEmails } from "@/data/newsletters";
import { SummaryEmail } from "@/data/emails";
import { EmailRow } from "@/components/home/emailRow";

export default function Page({ params }: { params: { slug: string } }) {
  let emails:SummaryEmail[] = []
  if (params.slug.toLowerCase().includes("benedict") || params.slug.toLowerCase().includes("evans")) {
    emails = newsletterEmails.filter((email) => email.sender.toLowerCase().includes("benedict"))
  }

  return (
    <div className="w-full h-full">
      <h1 className="text-[30px] text-gray-500 font-light">All your newsletters</h1>
      <div className="w-full h-[1px] bg-gray-350 my-[20px]"/>
      <div className="flex flex-col w-full mt-[10px] h-[calc(100vh-300px)] pr-[5px] overflow-y-auto">
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
      </div>
    </div>
  );
}
