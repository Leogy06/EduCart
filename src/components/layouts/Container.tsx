import React, { ReactNode } from "react";
import SidePanel from "./SidePanel";
import Header from "./Header";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-sky-50 border-2 border-blue-500">
      <div className=" flex flex-col flex-grow ms-4 md:ms-20 me-4 overflow-hidden">
        <SidePanel />
        <Header />
        <div className=" relative h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Container;
