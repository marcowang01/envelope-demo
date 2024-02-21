export function SimpleRow({
  title,
  label,
  id,
}: {
  title: string;
  label: string;
  id: string;
}) {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="font-normal text-base  text-gray-500">{title}</div>
      <div className="font-light text-xs  text-gray-450 italic">{label}</div>
    </div>
  );
}
