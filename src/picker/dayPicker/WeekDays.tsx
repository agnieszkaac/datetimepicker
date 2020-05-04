import React from "react";
import { Moment } from "moment";

import { weekDaysNumber } from "./utils";

interface WeekDaysProps {
  date: Moment;
}

export const WeekDays: React.FunctionComponent<WeekDaysProps> = ({ date }) => (
  <div className="week-days">
    {Array.from({ length: weekDaysNumber }, (_e, i) => (
      <span key={i} className="day-of-week">
        {date.weekday(i).format("ddd")}
      </span>
    ))}
  </div>
);
