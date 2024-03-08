export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <h1 className="text-[30px] text-gray-500 font-light">
        Work and opportunities
      </h1>
      <div className="w-full h-[1px] bg-gray-350 my-[20px]" />
      <div className="flex flex-col w-full mt-[10px] h-[calc(100vh-300px)] pr-[5px] overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
