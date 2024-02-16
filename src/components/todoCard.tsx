import { Card } from "./card";
import { todos } from "@/data/emails";
import { PencilIcon } from "@/assets/pencil-icon";

function TodoCardItems() {
  return(
    <div>
      Todo things
    </div>
  )
}

export function TodoCard() {
  return (
    <Card
      title={"To-do"}
      body={<TodoCardItems />}
      colorClass="text-yellow-400"
      icon={<PencilIcon />}
    />
  )
}