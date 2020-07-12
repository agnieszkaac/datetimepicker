import React from "react";
import moment from "moment";
import cx from "classnames";

import { PickerComponentProps } from "./types";
import { defaultGridSize as length } from "./utils";
import { DateContext, ViewContext } from "../state";

import { PickButton } from "./PickButton";

import "./MonthPicker.scss";

export const MonthPicker: React.FC<PickerComponentProps> = ({ onPick }) => {
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  return (
    <div className="month-picker">
      {Array.from({ length }, (_e, i) => {
        const month = moment(viewDate).month(i);
        return (
          <PickButton
            key={i}
            type="month"
            date={month.startOf("month")}
            format="MMM"
            className={cx({
              selected: date?.month() === i && date?.isSame(viewDate, "y"),
              "is-today": month.isSame(moment(), "M"),
            })}
            onClick={onPick}
          />
        );
      })}
    </div>
  );
};
