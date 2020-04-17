import React from "react";

import { noop } from "../utils";
import { PickerProps } from "../types";
import { DayPicker } from "./DayPicker";
import "./Picker.scss";

export const Picker: React.FunctionComponent<PickerProps> = ({
  pickerRef,
  onPick = noop,
}) => {
  return (
    <div className={"picker"} ref={pickerRef}>
      <DayPicker onPick={onPick}/>
    </div>
  );
};
