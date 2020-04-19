import React from "react";
import { Moment } from "moment";

import { View } from "./types";
import { getDecadeStart } from "../utils";

export interface SwitchProps {
  viewDate: Moment;
  view: View;
  onClick: () => void;
}

export const ViewSwitcher: React.FunctionComponent<SwitchProps> = ({
  viewDate,
  view,
  onClick,
}) => {
  const decadeStart = getDecadeStart(viewDate);
  return (
    <div className="switch" onClick={onClick}>
      {view === View.Year
        ? `${decadeStart} - ${decadeStart + 11}`
        : viewDate.format(view === View.Month ? "YYYY" : "MMMM YYYY")}
    </div>
  );
};
