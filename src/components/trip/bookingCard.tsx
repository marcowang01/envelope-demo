export function BookingCard({ title }: { title: string }) {
  return (
    <div className="w-[175px] h-[200px] rounded-[25px] bg-blue-200">
      {title}
    </div>
  )
}