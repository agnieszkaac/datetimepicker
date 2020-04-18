import React from "react";

import { MonthPickerProps, Month } from "./";

export const MonthPicker: React.FunctionComponent<MonthPickerProps> = ({
  value,
  onPick,
}) => (
  <div className="month-picker">
    {Array.from({ length: 12 }, (e, i) => (
      <Month
        key={i + 1}
        value={(i + 1).toString()}
        selected={value === (i + 1).toString()}
        onPick={onPick}
      />
    ))}
  </div>
);
