import React from "react";
import moment from "moment";
import cx from "classnames";

import { MonthProps } from "./index";
import "./MonthPicker.scss";

export const Month: React.FunctionComponent<MonthProps> = ({
  date,
  selected,
  onPick,
}) => {
  const isToday = moment(date).isSame(moment(), "month");
  return (
    <button
      type="button"
      value={moment(date).toISOString()}
      className={cx("month", { selected: selected, "is-today": isToday })}
      onClick={onPick}
    >
      {moment(date).format("MMM")}
    </button>
  );
};
