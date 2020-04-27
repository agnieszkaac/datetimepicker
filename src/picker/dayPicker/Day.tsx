import React from "react";
import moment from "moment";
import cx from "classnames";

import { DayProps } from "./index";

export const Day: React.FunctionComponent<DayProps> = ({
  date,
  selected,
  className,
  onClick,
}) => (
  <button
    type="button"
    value={date.toISOString()}
    className={cx(className, "day", {
      selected: selected,
      "is-today": date.isSame(moment(), "day"),
    })}
    onClick={onClick}
  >
    {date.date()}
  </button>
);
