import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

export interface YearProps {
  date: Moment;
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Year: React.FunctionComponent<YearProps> = ({
  date,
  selected,
  onClick,
}) => (
  <button
    type="button"
    data-testid="year"
    value={date.toISOString()}
    className={cx("year", {
      selected,
      "is-today": date.isSame(moment(), "y"),
    })}
    onClick={onClick}
  >
    {date.format("YYYY")}
  </button>
);
