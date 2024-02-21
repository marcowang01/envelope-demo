import clsx from "clsx";

export function BookingCardTitle(
  {
    title,
    content,
    textColor,
    highlightColor,
    extraStyles, // usually for text alignment
  } : {
    title: string,
    content: string,
    textColor: string,
    highlightColor: string,
    extraStyles?: string,
  }
) {
  return (
    <div className={clsx("flex flex-col", extraStyles)}>
      <div className={clsx("text-[6px] leading-[7px] font-normal uppercase", textColor)}>
        {title}
      </div>
      <div className={clsx("text-[20px] leading-[23px] font-normal uppercase", highlightColor)}>
        {content}
      </div>
    </div>
  )
}