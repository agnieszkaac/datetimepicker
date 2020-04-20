import React from "react";
import moment from "moment";

import { DayPickerProps, Day } from "./index";

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => {
  return (
    <div className="day-picker">
      {Array.from({ length: days.length }, (_e, i) => (
        <div key={i} className="day">{days[i]}</div>
      ))}
      {Array.from({ length: moment(viewDate).daysInMonth() }, (_e, i) => {
        let showDate = moment(viewDate).date(i+1);
        if(moment(viewDate).date(i+1).day() > 0) {
          showDate = moment(viewDate).subtract(moment(viewDate).date(i+1).day(), "day")
        }
        return (
          <Day
            key={i + 1}
            date={moment(viewDate).date(i + 1)}
            selected={date?.date() === i + 1 && date?.isSame(viewDate, "month")}
            onPick={onPick}
          />
        )
      })}
    </div>
  );
};
