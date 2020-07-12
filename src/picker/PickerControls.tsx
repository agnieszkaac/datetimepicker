import React from "react";
import { Moment } from "moment";

import { PickerComponentProps } from "./types";
import { DateContext, ViewContext } from "../state";

import { PickButton } from "./PickButton";

const displayFormat = {
  day: "D",
  month: "MMM",
  year: "YYYY",
};

type PickerControlsProps = PickerComponentProps & {
  length: number;
  type: "day" | "month" | "year";
  dateFormula: (viewDate: Moment, i: number) => Moment;
  getClassName: (date: Moment, i: number) => string;
};

export const PickerControls: React.FC<PickerControlsProps> = (props) => {
  const { length, type, dateFormula, getClassName, onPick } = props;
  const { viewDate } = React.useContext(ViewContext);
  const { date } = React.useContext(DateContext);

  return (
    <>
      {Array.from({ length }, (_e, i) => {
        const dateValue = dateFormula(viewDate, i);
        return (
          <PickButton
            key={i}
            type={type}
            date={dateValue}
            format={displayFormat[type]}
            onClick={onPick}
            className={getClassName(dateValue, i)}
          />
        );
      })}
    </>
  );
};
