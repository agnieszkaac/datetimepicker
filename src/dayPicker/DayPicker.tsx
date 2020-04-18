import React from "react";

import { DayPickerProps, Day } from "./";

export const DayPicker: React.FunctionComponent<DayPickerProps> = ({
  value,
  monthLength,
  onPick,
}) => (
  <div className="day-picker">
    {Array.from({ length: monthLength }, (e, i) => (
      <Day
        key={i + 1}
        value={(i + 1).toString()}
        selected={value === (i + 1).toString()}
        onPick={onPick}
      />
    ))}
  </div>
);
