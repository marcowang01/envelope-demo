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
