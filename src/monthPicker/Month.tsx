import React from "react";
import moment from "moment";
import cx from "classnames";

import { MonthProps } from "./";
import "./MonthPicker.scss";

export const Month: React.FunctionComponent<MonthProps> = ({
  value,
  selected,
  onPick,
}) => {
  const isToday = (moment().month() + 1).toString() === value;
  return (
    <button
      type="button"
      className={cx("month", { selected: selected, "is-today": isToday })}
      onClick={onPick}
      value={value}
    >
      {moment(value, "MM").format("MMM")}
    </button>
  );
};
