import React from "react";
import moment from "moment";
import cx from "classnames";

import { DayProps } from "./";
import "./DayPicker.scss";

export const Day: React.FunctionComponent<DayProps> = ({
  value,
  selected,
  onPick,
}) => {
  const isToday = moment().date().toString() === value;
  return (
    <button
      type="button"
      className={cx("day", { selected: selected, "is-today": isToday })}
      onClick={onPick}
      value={value}
    >
      {value}
    </button>
  );
};
