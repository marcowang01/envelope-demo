import { LeftPanel } from "@/components/leftPanel";
import { RightPanel } from "@/components/rightPanel";

export default function Home() {
  return (
    <div className="flex flex-row w-full justify-center grow mt-[50px] gap-[70px]">
      <div className="w-3/5 border-2">
        <LeftPanel />
      </div>
      <div className="w-2/5 border-2">
        <RightPanel />
      </div>
    </div>
  );
}
