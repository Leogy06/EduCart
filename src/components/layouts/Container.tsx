import React, { ReactNode } from "react";
import SidePanel from "./SidePanel";
import TopPanel from "./TopPanel";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-[#F8F9FA]">
      <TopPanel />
      <SidePanel />
      <div className=" ms-20 flex-grow overflow-hidden ">
        <div className="relative h-full overflow-y-auto z-0 mt-[4.5rem]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
