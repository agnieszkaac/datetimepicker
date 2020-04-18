import React from "react";
import cx from "classnames";
import moment from "moment";

import { DayPickerProps, DayProps } from "../types";

const Day: React.FunctionComponent<DayProps> = ({
  value,
  selected,
  isToday,
  onPick,
}) => (
  <button
    className={cx("day", { selected: selected, "is-today": isToday })}
    onClick={onPick}
    value={value}
  >
    {value}
  </button>
);

export const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  value,
  monthLength,
  onPick,
}) => (
  <div className="day-picker">
    {Array.from({ length: monthLength }, (e, i) => (
      <Day
        key={i + 1}
        value={(i + 1).toString()}
        selected={value === (i + 1).toString()}
        isToday={moment().date().toString() === value}
        onPick={onPick}
      />
    ))}
  </div>
);
