import { EmailRow } from "./emailRow";
import clsx from "clsx";
import { Email, TodoEmail } from "@/data/emails";

export function TodoCardItems({ todos }: { todos: TodoEmail[] }) {
  return (
    // 176 is exactly 4 rows of 44px
    <div
      className={clsx(
        "flex flex-col justify start mt-[20px] h-[calc((100vh-543px)*0.36)] max-h-[220px] overflow-y-auto",
        {
          "pr-[8px]": todos.length > 4,
        },
      )}
    >
      {todos.map((email, index) => {
        return (
          <EmailRow
            key={`todo-${index}`}
            email={email as Email}
            sender={email.sender}
            title={email.title}
            gapClass={"gap-[0px]"}
            actions={["check"]}
          />
        );
      })}
    </div>
  );
}
