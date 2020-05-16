import React from "react";
import moment, { Moment } from "moment";

import { Year } from "./";
import { getDecadeStart } from "../../utils";
import "./YearPicker.scss";

export interface YearPickerProps {
  date: Moment | undefined;
  viewDate: Moment;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const YearPicker: React.FunctionComponent<YearPickerProps> = ({
  date,
  viewDate,
  onPick,
}) => {
  const decadeStart = getDecadeStart(viewDate);
  return (
    <div className="year-picker">
      {Array.from({ length: 12 }, (_e, i) => (
        <Year
          key={i + 1}
          viewDate={moment(viewDate).year(decadeStart + i)}
          selected={date?.year() === decadeStart + i}
          onClick={onPick}
        />
      ))}
    </div>
  );
};
