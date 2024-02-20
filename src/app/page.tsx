import { LeftPanel } from "@/components/leftPanel";
import { RightPanel } from "@/components/rightPanel";

export default function Home() {
  return (
    <div className="flex flex-row w-full justify-center grow mt-[50px] gap-[70px]">
      <div className="w-3/5">
        <LeftPanel />
      </div>
      <div className="w-2/5">
        <RightPanel />
      </div>
    </div>
  );
}


// todo:
// - add dragg drop
// - use vh + ratio instead of absolute heights for the three panel
//    - but always keep 4:3:2 ratio and also have exact row heights