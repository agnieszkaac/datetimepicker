import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

import { Month } from "./";
import { defaultGridSize as length } from "../dayPicker/utils";
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
    {Array.from({ length }, (_e, i) => {
      const month = moment(viewDate).month(i);
      return (
        <Month
          key={i}
          viewDate={month}
          className={cx({
            selected: date?.month() === i && date?.isSame(viewDate, "y"),
            "is-today": month.isSame(moment(), "M"),
          })}
          onClick={onPick}
        />
      );
    })}
  </div>
);
