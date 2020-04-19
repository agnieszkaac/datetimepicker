import React from "react";
import moment from "moment";

import { DayPickerProps, Day } from "./";

export const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => {
  return (
    <div className="day-picker">
      {Array.from({ length: moment(viewDate).daysInMonth() }, (_e, i) => (
        <Day
          key={i + 1}
          date={moment(viewDate).date(i + 1)}
          selected={date?.date() === i + 1 && date?.isSame(viewDate, "month")}
          onPick={onPick}
        />
      ))}
    </div>
  );
};
