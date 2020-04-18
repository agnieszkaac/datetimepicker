import * as React from "react";
import cx from "classnames";
import moment from "moment";

import { DayPickerProps, DayProps } from "../types";

const Day: React.FunctionComponent<DayProps> = ({
  value,
  selected,
  onPick,
}) => {
  const isToday = moment().format("DD") === value;
  return (
    <button
      className={cx("day-box", { selected: selected, "is-today": isToday })}
      onClick={onPick}
      value={value}
    >
      {value}
    </button>
  );
};

export const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  value,
  onPick,
}) => (
  <div className="day-picker">
    {Array.from({ length: 30 }, (e, i) => {
      return (
        <Day
          key={i}
          value={i.toString()}
          selected={value === i.toString()}
          onPick={onPick}
        />
      );
    })}
  </div>
);