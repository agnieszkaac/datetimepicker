import React from "react";
import moment, { Moment } from "moment";

import { Month } from "./";
import "./MonthPicker.scss";

export interface MonthPickerProps {
  date: Moment | undefined;
  viewDate: Moment;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

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
        onClick={onPick}
      />
    ))}
  </div>
);
