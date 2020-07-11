import React from "react";
import moment from "moment";
import cx from "classnames";

import { PickerComponentProps } from "./types";
import { showDaysNumber as length, viewData } from "./utils";
import { DateContext, ViewContext } from "../state";

import { WeekDays } from "./WeekDays";
import { PickButton } from "./PickButton";

import "./DayPicker.scss";

export const DayPicker: React.FC<PickerComponentProps> = ({ onPick }) => {
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  const { offset, prevMonth, nextMonth } = viewData(viewDate);

  return (
    <>
      <WeekDays />
      <div className="day-picker">
        {Array.from({ length }, (_e, i) => {
          const day = moment(viewDate).date(-offset + i);
          return (
            <PickButton
              key={i}
              type="day"
              date={day}
              format="D"
              className={cx({
                selected: date?.isSame(day, "d"),
                "is-today": day.isSame(moment(), "d"),
                "prev-day": day.isSame(prevMonth, "M"),
                "next-day": day.isSame(nextMonth, "M"),
              })}
              onClick={onPick}
            />
          );
        })}
      </div>
    </>
  );
};
