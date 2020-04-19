import React from "react";
import moment from "moment";

import { MonthPickerProps, Month } from "./";

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
        selected={date?.month() === i && date?.isSame(viewDate, "year")}
        onPick={onPick}
      />
    ))}
  </div>
);
