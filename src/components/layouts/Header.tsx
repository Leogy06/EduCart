import { FaRegBell, FaUser } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { TbGridDots } from "react-icons/tb";

const RightSide = () => {
  return (
    <div className=" flex items-center gap-1">
      <button className=" hover:bg-coral hover:text-white rounded-full p-3">
        <TbGridDots size={28} />
      </button>
      <button className="hover:bg-coral hover:text-white rounded-full p-3">
        <FaRegBell size={28} />
      </button>
      <button className="hover:bg-coral hover:text-white rounded-full p-3">
        <HiDotsVertical size={28} />
      </button>
      <button className="hover:bg-coral hover:text-white rounded-full p-3">
        <FaUser size={28} />
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
