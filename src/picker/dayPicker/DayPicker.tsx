import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

import { Day, WeekDays } from "./";
import { showDaysNumber as length, viewData } from "./utils";
import "./DayPicker.scss";

export type DayPickerProps = {
  date: Moment | undefined;
  viewDate: Moment;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => {
  const { offset, prevMonth, nextMonth } = viewData(viewDate);
  return (
    <>
      <WeekDays viewDate={viewDate} />
      <div data-testid="day-picker" className="day-picker">
        {Array.from({ length }, (_e, i) => {
          const day = moment(viewDate).date(-offset + i);
          return (
            <Day
              key={i}
              viewDate={day}
              className={cx({
                selected: date?.isSame(day, "d"),
                "is-today": day.isSame(moment(), "d"),
                "prev-month": day.isSame(prevMonth, "M"),
                "next-month": day.isSame(nextMonth, "M"),
              })}
              onClick={onPick}
            />
          );
        })}
      </div>
    </>
  );
};
