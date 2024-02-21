import { Card } from "./card";
import { todos } from "@/data/emails";
import { PencilIcon } from "@/assets/pencil-icon";
import { EmailRow } from "./emailRow";
import clsx from "clsx";


function TodoCardItems() {
  return (
    // 176 is exactly 4 rows of 44px
    <div
      className={clsx(
        "flex flex-col gap-[20px] justify start mt-[30px] h-[176px] overflow-y-auto",
        {
          "pr-[8px]": todos.length > 4,
        },
      )}
    >
      {todos.map((email, index) => {
        return (
          <EmailRow
            key={`todo-${index}`}
            id={email.id}
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

export function TodoCard() {
  return (
    <Card
      title={"To-do"}
      body={<TodoCardItems />}
      colorClass="group-hover:text-yellow-400"
      icon={<PencilIcon />}
    />
  );
}
