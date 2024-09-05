import React, { ReactNode, useState } from "react";
import { BiCart } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiPencilRulerDuotone } from "react-icons/pi";

interface ListNavProps {
  text: string;
  icons: ReactNode;
  isExpand: boolean;
  to: string;
}

const ListNav: React.FC<ListNavProps> = ({ icons, text, isExpand, to }) => {
  const resolvedPath = useResolvedPath(to);
  const isPageActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link to={to} className="flex items-center gap-1">
        <div
          className={`h-14 w-2 ${isPageActive ? "bg-coral" : "bg-inherit"} `}
        ></div>
        {icons}
        <span className={isExpand ? "flex" : "hidden"}>{text}</span>
      </Link>
    </li>
  );
};

interface BurgerButtonProps {
  handleIsExpand: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ handleIsExpand }) => {
  return (
    <div
      onClick={handleIsExpand}
      className=" flex items-center gap-1 cursor-pointer"
    >
      <div className="h-14 w-2"></div>
      <GiHamburgerMenu size={24} />
    </div>
  );
};

const SidePanel = () => {
  const [isExpand, setIsExpand] = useState(false);

  const handleIsExpand = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <div
      className={` flex h-full absolute left-0 top-0 bottom-0 bg-skyBlue shadow-lg transition-all duration-500 z-10 ${
        isExpand ? "w-36" : "w-14"
      }`}
      onMouseEnter={() => setIsExpand(true)}
      onMouseLeave={() => setIsExpand(false)}
    >
      <nav className="h-full">
        <ul>
          <BurgerButton handleIsExpand={handleIsExpand} />
          <ListNav
            icons={<FaHome size={24} />}
            text="Dashboard"
            isExpand={isExpand}
            to="/"
          />
          <ListNav
            icons={<BiCart size={24} />}
            text="Cart"
            isExpand={isExpand}
            to="/cart"
          />
          <ListNav
            icons={<PiPencilRulerDuotone size={24} />}
            text="Items"
            isExpand={isExpand}
            to="/browse"
          />
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;
