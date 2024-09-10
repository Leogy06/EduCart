import React from "react";

interface CardProps {
  category: string;
  name: string;
  stockQuantity: number;
}

const Card: React.FC<CardProps> = ({ category, name, stockQuantity }) => {
  return (
    /* From Uiverse.io by Yaya12085 */
    <div className="relative flex w-50 md:w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg bg-sky-900 "></div>
      <div className="p-6">
        <h5 className="flex items-center justify-between  mb-2 font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
          {name}
          <span className=" text-sm font-thin text-coral">
            Stock: {stockQuantity}
          </span>
        </h5>
        <p className="font-sans text-base font-light leading-relaxed antialiased  max-h-24 overflow-hidden text-ellipsis whitespace-normal">
          {category}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg hover-coral-white text-brightYellow bg-sky-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Card;
