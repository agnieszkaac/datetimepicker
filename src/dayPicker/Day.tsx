import React from "react";
import moment from "moment";
import cx from "classnames";

import { DayProps } from "./";
import "./DayPicker.scss";

export const Day: React.FunctionComponent<DayProps> = ({
  date,
  selected,
  onPick,
}) => {
  const isToday = date.isSame(moment(), "day");
  return (
    <button
      type="button"
      className={cx("day", { selected: selected, "is-today": isToday })}
      value={date.toISOString()}
      onClick={onPick}
    >
      {date.date()}
    </button>
  );
};
