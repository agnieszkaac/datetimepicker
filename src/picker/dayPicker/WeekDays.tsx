import React from "react";
import moment from "moment";

import { weekDaysNumber } from "./utils";

export const WeekDays: React.FunctionComponent = () => (
  <>
    {Array.from({ length: weekDaysNumber }, (_e, i) => (
      <span key={i} className="day-of-week">
        {moment().weekday(i).format("ddd")}
      </span>
    ))}
  </>
);
