import { EmailType } from "@/data/emails";
import { CardType } from "@/components/home/emailCard";
import { EmailCardDragData } from "@/components/home/emailCard";
import { EmailDragData } from "@/components/home/emailRow";

export function formatDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  });
  const formattedDate = formatter.format(date);

  const day = date.getDate();
  let suffix = "th";
  if (day % 10 === 1 && day !== 11) {
    suffix = "st";
  } else if (day % 10 === 2 && day !== 12) {
    suffix = "nd";
  } else if (day % 10 === 3 && day !== 13) {
    suffix = "rd";
  }

  return formattedDate.replace(/\d+/, `$&${suffix}`);
}

export function dragOverIsValid(
  activeDataType: EmailType,
  overData: EmailCardDragData | EmailDragData
): boolean {
  // always allow dragging over seen card
  if (overData.type === CardType.Seen) {
    return true;
  }

  // summary emails can only be dragged over todo card, todo email
  if (activeDataType === EmailType.Summary) {
    return (
      overData.type === CardType.Todo ||
      overData.type === EmailType.Todo ||
      overData.type === CardType.Summary ||
      overData.type === EmailType.Summary
    );
  }

  // to-do emails can only be dragged over todo email, todo card,
  if (activeDataType === EmailType.Todo) {
    return overData.type === CardType.Todo || overData.type === EmailType.Todo;
  }

  return false;
}
