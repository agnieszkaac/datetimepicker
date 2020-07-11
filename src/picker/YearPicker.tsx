import React from "react";
import moment from "moment";
import cx from "classnames";

import { PickerComponentProps } from "./types";
import { defaultGridSize as length } from "./utils";
import { ViewContext } from "../state/ViewContext";
import { DateContext } from "../state/DateContext";
import { getDecadeStart } from "../utils";

import { PickButton } from "./PickButton";
import "./YearPicker.scss";

export const YearPicker: React.FC<PickerComponentProps> = ({ onPick }) => {
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  const decadeStart = getDecadeStart(viewDate);

  return (
    <div className="year-picker">
      {Array.from({ length }, (_e, i) => {
        const year = moment(viewDate).year(decadeStart + i);
        return (
          <PickButton
            key={i}
            data-testid="year"
            date={year.startOf("year")}
            format="YYYY"
            className={cx({
              selected: date?.year() === decadeStart + i,
              "is-today": year.isSame(moment(), "y"),
            })}
            onClick={onPick}
          />
        );
      })}
    </div>
  );
};
