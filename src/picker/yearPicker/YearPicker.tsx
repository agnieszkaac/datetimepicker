import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

import { Year } from "./";
import { defaultGridSize as length } from "../dayPicker/utils";
import { getDecadeStart } from "../../utils";
import "./YearPicker.scss";

export interface YearPickerProps {
  date: Moment | undefined;
  viewDate: Moment;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const YearPicker: React.FunctionComponent<YearPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => {
  const decadeStart = getDecadeStart(viewDate);
  return (
    <div className="year-picker">
      {Array.from({ length }, (_e, i) => {
        const year = moment(viewDate).year(decadeStart + i)
        return (
          <Year
            key={i}
            viewDate={year}
            className={cx({
              selected: date?.year() === decadeStart + i,
              "is-today": year.isSame(moment(), "y"),
            })}
            onClick={onPick}
          />
        )
      })}
    </div>
  );
};
