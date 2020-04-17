import * as React from "react";

import { DayPickerProps, DayProps } from "../types";

const Day: React.FunctionComponent<DayProps> = ({ value, onPick }) => (
  <button className="day-box" onClick={onPick} value={value}>
    {value}
  </button>
);

export const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  onPick,
}) => (
  <div className="day-picker">
    {Array.from({ length: 30 }, (e, i) => {
      return <Day key={i} value={i.toString()} onPick={onPick} />;
    })}
  </div>
);
