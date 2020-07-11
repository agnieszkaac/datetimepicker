import React from "react";
import { Moment } from "moment";

export type PickButtonProps = {
  date: Moment;
  format: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const PickButton: React.FC<PickButtonProps> = (props) => {
  const { date, format, className, onClick } = props;
  return (
    <button
      type="button"
      value={date.toString()}
      className={className}
      onClick={onClick}
    >
      {date.format(format)}
    </button>
  );
};
