import React from "react";
import moment from "moment";
import cx from "classnames";

import { DayProps } from "./index";
import "./DayPicker.scss";

export const Day: React.FunctionComponent<DayProps> = ({
  date,
  selected,
  onPick,
}) => {
  const isToday = moment(date).isSame(moment(), "day");
  return (
    <button
      type="button"
      value={moment(date).toISOString()}
      className={cx("day", { selected: selected, "is-today": isToday })}
      onClick={onPick}
    >
      {moment(date).date()}
    </button>
  );
};
