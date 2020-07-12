import React from "react";
import moment from "moment";
import cx from "classnames";

import { PickerComponentProps } from "./types";
import { defaultGridSize as length } from "./utils";
import { DateContext, ViewContext } from "../state";

import { PickerControls } from "./PickerControls";

export const MonthPicker: React.FC<PickerComponentProps> = ({ onPick }) => {
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  return (
    <div className="month-picker">
      <PickerControls
        onPick={onPick}
        length={length}
        type={"month"}
        dateFormula={(viewDate, i) => moment(viewDate).month(i)}
        getClassName={(dateValue, i) =>
          cx({
            month: true,
            selected: date?.month() === i && date?.isSame(viewDate, "y"),
            "is-today": dateValue.isSame(moment(), "M"),
          })
        }
      />
    </div>
  );
};
