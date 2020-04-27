import React from "react";
import moment from "moment";
import cx from "classnames";

import { DayPickerProps, Day } from "./index";
import { prevDaysOffset, showDaysNumber } from "../../utils";
import { WeekDays } from "./WeekDays";
import "./DayPicker.scss";

const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => {
  const prevOffset = prevDaysOffset(moment(viewDate).date(1).weekday()) - 1; //0-6
  const prevMonth = moment(viewDate).subtract(1, "M");
  const nextMonth = moment(viewDate).add(1, "M");
  return (
    <div className="day-picker">
      <WeekDays />
      {Array.from({ length: showDaysNumber }, (_e, i) => {
        const day = moment(viewDate).date(-prevOffset + i);
        return (
          <Day
            key={i}
            date={day}
            selected={
              (date?.date() === prevMonth.daysInMonth() - prevOffset + i &&
                date?.isSame(prevMonth, "M")) ||
              (date?.date() === i - prevOffset &&
                date?.isSame(viewDate, "M")) ||
              (date?.date() === i - viewDate.daysInMonth() - prevOffset &&
                date?.isSame(nextMonth, "M"))
            }
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

export default DayPicker;
