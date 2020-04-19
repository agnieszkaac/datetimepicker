import React from "react";

interface RangeChangerProps {
  value: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const RangeChanger: React.FunctionComponent<RangeChangerProps> = ({
  value,
  onClick,
}) => {
  return (
    <button value={value} onClick={onClick}>
      {value > 0 ? "+" : "-"}
    </button>
  );
};
