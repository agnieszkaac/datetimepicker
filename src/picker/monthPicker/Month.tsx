import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

export interface MonthProps {
  date: Moment;
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Month: React.FunctionComponent<MonthProps> = ({
  date,
  selected,
  onClick,
}) => (
  <button
    type="button"
    data-testid="month"
    value={date.toISOString()}
    className={cx("month", {
      selected,
      "is-today": date.isSame(moment(), "M"),
    })}
    onClick={onClick}
  >
    {date.format("MMM")}
  </button>
);
