import React from "react";
import moment, { Moment } from "moment";
import cx from "classnames";

import { PickerComponentProps } from "./types";
import { defaultGridSize as length } from "./utils";
import { DateContext, ViewContext } from "../state";
import { getDecadeStart } from "../utils";

import { PickerControls } from "./PickerControls";
import "./YearPicker.scss";

export const YearPicker: React.FC<PickerComponentProps> = ({ onPick }) => {
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  const decadeStart = getDecadeStart(viewDate);

  return (
    <div className="year-picker">
      <PickerControls
        onPick={onPick}
        length={length}
        type={"year"}
        dateFormula={(viewDate: Moment, i: number) =>
          moment(viewDate).year(decadeStart + i)
        }
        getClassName={(dateValue, i) =>
          cx({
            selected: date?.year() === decadeStart + i,
            "is-today": dateValue.isSame(moment(), "y"),
          })
        }
      />
    </div>
  );
};
