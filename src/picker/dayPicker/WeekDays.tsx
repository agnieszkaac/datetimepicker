import React from "react";
import { Moment } from "moment";

import { weekDaysNumber as length } from "./utils";

export type WeekDaysProps = {
  viewDate: Moment;
}

export const WeekDays: React.FunctionComponent<WeekDaysProps> = ({
  viewDate,
}) => (
  <div className="week-days">
    {Array.from({ length }, (_e, i) => (
      <span key={i} className="week-day" data-testid="week-day">
        {viewDate.weekday(i).format("ddd")}
      </span>
    ))}
  </div>
);
