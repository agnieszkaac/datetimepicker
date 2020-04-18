import React, { useState } from "react";
import moment from "moment";

import { noop } from "../utils";
import { PickerProps } from "../types";
import { DayPicker } from "../dayPicker/DayPicker";
import "./Picker.scss";

export const Picker: React.FunctionComponent<PickerProps> = ({
  value,
  pickerRef,
  onPick = noop,
}) => {
  const [month, setMonth] = useState(moment().month());
  const daysInMonth = moment().month(month).daysInMonth();
  const switchMonth = (value: number) => {
    setMonth(month + value);
  };

  return (
    <div className="picker" ref={pickerRef}>
      <span>{month}</span>
      <div className="wrapper">
        <div className="switch-month" onClick={(e) => switchMonth(-1)}>
          -
        </div>
        <DayPicker monthLength={daysInMonth} value={value} onPick={onPick} />
        <div className="switch-month" onClick={(e) => switchMonth(+1)}>
          +
        </div>
      </div>
    </div>
  );
};
