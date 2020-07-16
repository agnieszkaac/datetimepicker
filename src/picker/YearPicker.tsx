import React from "react";
import moment from "moment";
import cx from "classnames";

import { PickerComponentProps } from "./types";
import { defaultGridSize as length, getDecadeStart } from "./utils";
import { DateContext, ViewContext } from "../state";

import { PickButton } from "./PickButton";

export const YearPicker: React.FC<PickerComponentProps> = ({ onPick }) => {
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  const decadeStart = getDecadeStart(viewDate);

  return (
    <div className="year-picker">
      {Array.from({ length }, (_e, i) => {
        const dateValue = moment(viewDate).year(decadeStart + i);
        return (
          <PickButton
            key={i}
            type="year"
            date={dateValue}
            format="YYYY"
            onClick={onPick}
            className={cx({
              year: true,
              selected: date?.year() === decadeStart + i,
              "is-today": dateValue.isSame(moment(), "y"),
            })}
          />
        );
      })}
    </div>
  );
};
