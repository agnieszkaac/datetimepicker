import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

export interface DayProps {
  date: Moment;
  selected: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Day: React.FunctionComponent<DayProps> = ({
  date,
  selected,
  className,
  onClick,
}) => (
  <button
    type="button"
    data-testid="day"
    value={date.toISOString()}
    className={cx(className, "day", {
      selected,
      "is-today": date.isSame(moment(), "d"),
    })}
    onClick={onClick}
  >
    {date.date()}
  </button>
);
