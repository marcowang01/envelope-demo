import clsx from "clsx";

export function BookingCardLabel(
  {
    label,
    content,
    textColor,
    highlightColor,
    extraStyles,
  } : {
    label: string,
    content: string,
    textColor: string,
    highlightColor: string,
    extraStyles?: string,
  }
) {
  return (
    <div className={clsx("flex flex-col", extraStyles)}>
      <div className={clsx("text-[6px] leading-[7px] font-normal uppercase", textColor)}>
        {label}
      </div>
      <div className={clsx("text-[10px] leading-[11px] font-normal", highlightColor)}>
        {content}
      </div>
    </div>
  )
}