import React from "react";
import { Moment } from "moment";
import cx from "classnames";

export type MonthProps = {
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
