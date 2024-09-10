import React, { MouseEventHandler } from "react";
import "./Button.css";
interface ButtonsProps {
  btnClassName: string;
  btnText: string;
  onBtnClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonsProps> = ({
  btnClassName,
  btnText,
  onBtnClick,
}) => {
  return (
    /* From Uiverse.io by andrew-demchenk0 */
    /* From Uiverse.io by andrew-demchenk0 */
    <div className={btnClassName}>
      <button
        onClick={onBtnClick}
        type="button"
        className="button-add-item bg-sky-900 border border-sky-950"
      >
        <span className="button-add-item__text">{btnText}</span>
        <span className="button-add-item__icon bg-coral">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="svg-btn"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Button;
