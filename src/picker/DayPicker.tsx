import React from "react";
import moment from "moment";
import cx from "classnames";

import { PickerComponentProps } from "./types";
import { showDaysNumber as length, viewData } from "./utils";
import { DateContext, ViewContext } from "../state";

import { WeekDays } from "./WeekDays";
import { PickButton } from "./PickButton";

export const DayPicker: React.FC<PickerComponentProps> = (props) => {
  const { onPick } = props;
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  const { offset, prevMonth, nextMonth } = viewData(viewDate);

  return (
    <>
      <WeekDays />
      <div className="day-picker">
        {Array.from({ length }, (_e, i) => {
          const dateValue = moment(viewDate).date(-offset + i);
          return (
            <PickButton
              key={i}
              type="day"
              date={dateValue}
              format="D"
              onClick={onPick}
              className={cx({
                day: true,
                selected: date?.isSame(dateValue, "d"),
                "is-today": dateValue.isSame(moment(), "d"),
                "prev-day": dateValue.isSame(prevMonth, "M"),
                "next-day": dateValue.isSame(nextMonth, "M"),
              })}
            />
          );
        })}
      </div>
    </>
  );
};
