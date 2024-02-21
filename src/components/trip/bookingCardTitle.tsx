import clsx from "clsx";

export function BookingCardTitle({
  title,
  content,
  textColor,
  highlightColor,
  extraStyles, // usually for text alignment
}: {
  title: string;
  content: string;
  textColor: string;
  highlightColor: string;
  extraStyles?: string;
}) {
  return (
    <div className={clsx("flex flex-col", extraStyles)}>
      <div
        className={clsx(
          "text-[6px] leading-[7px] font-normal uppercase",
          textColor,
        )}
      >
        {title}
      </div>
      <div
        className={clsx(" font-normal uppercase ", highlightColor, {
          "text-[18px] leading-[23px] mt-[2px]": content.length <= 10,
          "text-[16px] leading-[18px]": content.length > 10,
        })}
      >
        {content}
      </div>
    </div>
  );
}
