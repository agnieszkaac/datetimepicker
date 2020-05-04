import React from "react";
import moment from "moment";

import { Year, YearPickerProps } from "./index";
import { getDecadeStart } from "../../utils";
import "./YearPicker.scss";

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
          date={moment(viewDate).year(decadeStart + i)}
          selected={date?.year() === decadeStart + i}
          onClick={onPick}
        />
      ))}
    </div>
  );
};
