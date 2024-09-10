import { useState } from "react";
import { BiCart } from "react-icons/bi";
import { FaHome, FaRegBell, FaUser } from "react-icons/fa";
import { PiPencilRulerDuotone } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const MenuPanel = () => {
  return (
    <div className=" absolute -bottom-40 right-0 h-40 w-auto rounded-lg bg-white z-10 drop-shadow-lg">
      <div className=" flex flex-col p-4 justify-center items-stretch gap-y-2">
        <Link
          to={"/"}
          className=" flex gap-1 px-4 py-2 hover-coral-white rounded-md bg-sky-900 text-brightYellow"
        >
          <FaHome size={24} />
          Dashboard
        </Link>
        <Link
          to={"/cart"}
          className=" flex gap-1 px-4 py-2 hover-coral-white rounded-md bg-sky-900 text-brightYellow"
        >
          <BiCart size={24} />
          Cart
        </Link>
        <Link
          to={"/browse"}
          className=" flex gap-1 px-4 py-2 hover-coral-white rounded-md bg-sky-900 text-brightYellow"
        >
          <PiPencilRulerDuotone size={24} />
          Items
        </Link>
      </div>
    </div>
  );
};

const RightSide = () => {
  const [isMenuPanelOpen, setIsMenuPanelOpen] = useState(false);

  const handleOpenMenuPanel = () => {
    setIsMenuPanelOpen((prevState) => !prevState);
  };
  return (
    <div className=" flex items-center gap-1">
      <div className=" flex flex-col items-center relative">
        <button
          onClick={handleOpenMenuPanel}
          className="bg-sky-900 hover-coral-white text-brightYellow rounded-full p-3 "
        >
          <TbGridDots size={20} />
        </button>
        {isMenuPanelOpen && <MenuPanel />}
      </div>
      <button className=" bg-sky-900 hover-coral-white text-brightYellow rounded-full p-3">
        <FaRegBell size={20} />
      </button>
      <button className=" bg-sky-900 hover-coral-white text-brightYellow rounded-full p-3">
        <FaUser size={20} />
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <div className=" py-4">
      <div className=" flex justify-between">
        <div>
          <h1 className=" text-lg">EduCart</h1>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Header;
