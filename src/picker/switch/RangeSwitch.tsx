import React from "react";

export type RangeSwitchProps = {
  value: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const RangeSwitch: React.FunctionComponent<RangeSwitchProps> = ({
  value,
  onClick,
}) => (
  <button
    data-testid="range-switch"
    className="range-switch"
    value={value}
    onClick={onClick}
  >
    {value > 0 ? <span>&#10095;</span> : <span>&#10094;</span>}
  </button>
);
