import React from "react";

import { noop } from "../utils";
import { PickerProps } from "./types";

import { DayPicker } from "../dayPicker/DayPicker";
import { MonthPicker } from "../monthPicker";

import "./Picker.scss";

export const Picker: React.FunctionComponent<PickerProps> = ({
  date,
  pickerRef,
  onPick = noop,
}) => {
  return (
    <div className="picker" ref={pickerRef}>
      <div className="wrapper">
        <MonthPicker date={date} onPick={onPick} />
      </div>
    </div>
  );
};
