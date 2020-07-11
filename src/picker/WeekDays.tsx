import React from "react";
import moment from "moment";

import { weekDaysNumber as length } from "./utils";

export const WeekDays: React.FC = () => (
  <div className="week-days" data-testid="week-days">
    {Array.from({ length }, (_e, i) => (
      <span key={i} className="day-of-week" data-testid="day-of-week">
        {moment().weekday(i).format("ddd")}
      </span>
    ))}
  </div>
);
