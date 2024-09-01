import React, { ReactNode, useState } from "react";
import { FaHome } from "react-icons/fa";

interface ListNavProps {
  text: string;
  icons: ReactNode;
}

const ListNav: React.FC<ListNavProps> = ({ icons, text }) => {
  return (
    <li className=" flex items-center gap-1">
      {icons}
      <span className=" hidden">{text}</span>
    </li>
  );
};

const SidePanel = () => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div
      className={` h-full absolute left-0 top-0 bottom-0 border border-red-500 bg-red-500 transition-all duration-500 text-white ${
        isExpand ? "w-60" : "w-8"
      }`}
      onMouseEnter={() => setIsExpand(true)}
      onMouseLeave={() => setIsExpand(false)}
    >
      <nav>
        <h1 className=" mb-8">EduCart</h1>
        <ul>
          <ListNav icons={<FaHome size={24} />} text="Dashboard" />
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;
