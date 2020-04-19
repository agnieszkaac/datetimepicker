import React from "react";
import moment, { Moment } from "moment";

import { View } from "./types";

export interface SwitchProps {
  viewDate: Moment;
  view: View;
  onClick: () => void;
}

export const Switch: React.FunctionComponent<SwitchProps> = ({
  viewDate,
  view,
  onClick,
}) => {
  const decadeStart = Math.floor(moment(viewDate).get("year") / 10) * 10;
  return (
    <div className="switch" onClick={onClick}>
      {view === View.Year
        ? `${decadeStart} - ${decadeStart + 11}`
        : viewDate.format(
            view === View.Day ? "MMMM YYYY" : view === View.Month ? "YYYY" : "",
          )}
    </div>
  );
};
