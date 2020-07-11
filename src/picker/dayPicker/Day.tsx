import React from "react";
import { Moment } from "moment";
import cx from "classnames";

export type DayProps = {
  viewDate: Moment;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Day: React.FunctionComponent<DayProps> = (props) => {
  const { viewDate, className, onClick } = props;
  return (
    <button
      type="button"
      data-testid="day"
      value={viewDate.toISOString()}
      className={cx("day", className)}
      onClick={onClick}
    >
      {viewDate.date()}
    </button>
  );
};
