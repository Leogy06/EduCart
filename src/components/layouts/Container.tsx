import React, { ReactNode } from "react";
import SidePanel from "./SidePanel";
import Header from "./Header";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-[#F8F9FA]">
      <SidePanel />
      <div className=" ms-20 me-4 flex-grow overflow-hidden">
        <Header />
        <div className="relative h-full overflow-y-auto z-0 py-4 pe-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
