import React from "react";

interface RangeSwitcherProps {
  value: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const RangeSwitcher: React.FunctionComponent<RangeSwitcherProps> = ({
  value,
  onClick,
}) => {
  return (
    <button className="range-changer" value={value} onClick={onClick}>
      {value > 0 ? <span>&#10095;</span> : <span>&#10094;</span>}
    </button>
  );
};
