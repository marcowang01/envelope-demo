import { Card } from "./card";
import { todos } from "@/data/emails";
import { PencilIcon } from "@/assets/pencil-icon";
import { EmailRow } from "./emailRow";

function TodoCardItems() {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      {todos.map((email, index) => {
        return (
          <EmailRow
            key={`todo-${index}`}
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
