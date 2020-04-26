import React from "react";
import moment from "moment";
import cx from "classnames";

import { DayPickerProps, Day } from "./index";
import { prevDaysOffset, showDays } from "../../utils";

const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => {
  const prevOffset = prevDaysOffset(moment(viewDate).date(1).weekday());
  return (
    <div className="day-picker">
      {Array.from({ length: 7 }, (_e, i) => (
        <div key={i} className="day-of-week">
          {moment().weekday(i).format("ddd")}
        </div>
      ))}
      {Array.from({ length: showDays }, (_e, i) => {
        const day = moment(viewDate).date(-prevOffset + i);
        return (
          <Day
            key={i}
            date={day}
            selected={
              date?.date() === i - prevOffset && date?.isSame(viewDate, "month")
            }
            className={cx({
              "prev-day": day.isSame(
                moment(viewDate).subtract(1, "month"),
                "month",
              ),
              "next-day": day.isSame(moment(viewDate).add(1, "month"), "month"),
            })}
            onPick={onPick}
          />
        );
      })}
    </div>
  );
};

export default DayPicker;
