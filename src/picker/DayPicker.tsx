import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

import { PickerComponentProps } from "./types";
import { showDaysNumber as length, viewData } from "./utils";
import { DateContext, ViewContext } from "../state";

import { WeekDays } from "./WeekDays";
import { PickerControls } from "./PickerControls";
import "./DayPicker.scss";

export const DayPicker: React.FC<PickerComponentProps> = ({ onPick }) => {
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  const { offset, prevMonth, nextMonth } = viewData(viewDate);

  return (
    <>
      <WeekDays />
      <div className="day-picker">
        <PickerControls
          onPick={onPick}
          length={length}
          type={"day"}
          dateFormula={(viewDate: Moment, i: number) =>
            moment(viewDate).date(-offset + i)
          }
          getClassName={(dateValue, i) =>
            cx({
              selected: date?.isSame(dateValue, "d"),
              "is-today": dateValue.isSame(moment(), "d"),
              "prev-day": dateValue.isSame(prevMonth, "M"),
              "next-day": dateValue.isSame(nextMonth, "M"),
            })
          }
        />
      </div>
    </>
  );
};
