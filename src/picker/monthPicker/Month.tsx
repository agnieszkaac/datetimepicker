import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

export interface MonthProps {
  viewDate: Moment;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Month: React.FunctionComponent<MonthProps> = ({
  viewDate,
  className,
  onClick,
}) => (
  <button
    type="button"
    data-testid="month"
    value={viewDate.toISOString()}
    className={cx("month", className)}
    onClick={onClick}
  >
    {viewDate.format("MMM")}
  </button>
);
