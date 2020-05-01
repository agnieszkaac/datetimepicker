import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

import { Day, WeekDays } from "./";
import { showDaysNumber, viewData } from "./utils";
import "./DayPicker.scss";

export interface DayPickerProps {
  date: Moment | undefined;
  viewDate: Moment;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => {
  const { offset, prevMonth, nextMonth, selected } = viewData(viewDate, date);
  return (
    <div className="day-picker">
      <WeekDays />
      {Array.from({ length: showDaysNumber }, (_e, i) => {
        const day = moment(viewDate).date(-offset + i);
        return (
          <Day
            key={i}
            date={day}
            selected={i === selected}
            className={cx({
              "prev-day": day.isSame(prevMonth, "M"),
              "next-day": day.isSame(nextMonth, "M"),
            })}
            onClick={onPick}
          />
        );
      })}
    </div>
  );
};
