import { CheckIcon } from "@/assets/check-icon";
import { EyeIcon } from "@/assets/eye-icon";
import { PencilIcon } from "@/assets/pencil-icon";

function formatDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
  const formattedDate = formatter.format(date);

  const day = date.getDate();
  let suffix = 'th';
  if (day % 10 === 1 && day !== 11) {
    suffix = 'st';
  } else if (day % 10 === 2 && day !== 12) {
    suffix = 'nd';
  } else if (day % 10 === 3 && day !== 13) {
    suffix = 'rd';
  }

  return formattedDate.replace(/\d+/, `$&${suffix}`);
}

export function EmailRow({
  sender,
  title,
  date,
  actions
} : {
  sender: string
  title: string
  date?: string
  actions: string[]
}){
  
  return (
    <div className="italic text-gray-450  flex flex-row gap-[50px] font-xl w-full">
      <div className="font-bold cursor-pointer hover:text-gray-800 active:text-gray-500">
        {sender}
      </div>
      <div className="grow flex flex-row justify-between items-center  hover:text-gray-800  active:text-gray-500  cursor-pointer">
        <div className="grow ">
          {title}
        </div>
        {date && ( 
          <div>
            {formatDate(new Date(date))}
          </div>
        )}
      </div>

      <div className="flex flex-row justify-start gap-[20px] items-center ">
        {actions.includes("view") && (
          <div className="cursor-pointer hover:text-gray-800 active:text-gray-500 w-[20px]">
            <EyeIcon />
          </div>
        )}
        {actions.includes("edit") && (
          <div className="cursor-pointer hover:text-gray-800 active:text-gray-500 w-[18px]">
          <PencilIcon />
          </div>

        )}
        {actions.includes("check") && (
          <div className="cursor-pointer hover:text-gray-800 active:text-gray-500">

          <CheckIcon />
          </div>

        )}
      </div>
    </div>
  )

}