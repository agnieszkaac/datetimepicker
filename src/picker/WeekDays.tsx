import React from "react";
import moment, { Moment } from "moment";

import { weekDaysNumber } from "./utils";

export const WeekDays: React.FC = () => (
  <div className="week-days">
    {Array.from({ length: weekDaysNumber }, (_e, i) => (
      <span key={i} className="day-of-week" data-testid="day-of-week">
        {moment().weekday(i).format("ddd")}
      </span>
    ))}
  </div>
);
