import React from "react";

import { MonthPickerProps, Month } from "./";
import moment from "moment";

export const MonthPicker: React.FunctionComponent<MonthPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => (
  <div className="month-picker">
    {Array.from({ length: 12 }, (_e, i) => (
      <Month
        key={i + 1}
        date={moment(viewDate).month(i)}
        selected={date?.month() === i}
        onPick={onPick}
      />
    ))}
  </div>
);
