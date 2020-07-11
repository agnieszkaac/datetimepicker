import React from "react";
import { Moment } from "moment";

export type PickButtonProps = {
  date: Moment;
  type: "day" | "month" | "year";
  format: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const PickButton: React.FC<PickButtonProps> = (props) => {
  const { date, type, format, className, onClick } = props;
  return (
    <button
      type="button"
      data-testid={type}
      value={date.toString()}
      className={className}
      onClick={onClick}
    >
      {date.format(format)}
    </button>
  );
};
