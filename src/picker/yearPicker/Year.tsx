import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

export interface YearProps {
  viewDate: Moment;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Year: React.FunctionComponent<YearProps> = ({
  viewDate,
  className,
  onClick,
}) => (
  <button
    type="button"
    data-testid="year"
    value={viewDate.toISOString()}
    className={cx("year", className, {
      "is-today": viewDate.isSame(moment(), "y"),
    })}
    onClick={onClick}
  >
    {viewDate.format("YYYY")}
  </button>
);
