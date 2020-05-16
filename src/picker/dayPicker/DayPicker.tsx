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
  const { offset, prevMonth, nextMonth } = viewData(viewDate, date);
  return (
    <>
      <WeekDays date={viewDate} />
      <div className="day-picker">
        {Array.from({ length: showDaysNumber }, (_e, i) => {
          const day = moment(viewDate).date(-offset + i);
          return (
            <Day
              key={i}
              viewDate={day}
              className={cx({
                "prev-day": day.isSame(prevMonth, "M"),
                "next-day": day.isSame(nextMonth, "M"),
                selected: date?.isSame(viewDate),
                "is-today": viewDate.isSame(moment(), "d"),
              })}
              onClick={onPick}
            />
          );
        })}
      </div>
    </>
  );
};
