import React from "react";
import { Moment } from "moment";

import { View } from "../types";
import { RangeSwitcher } from "./RangeSwitcher";
import { ViewSwitcher } from "./ViewSwitcher";
import { getViewLabel } from "../../utils";
import "./ViewChanger.scss";

export interface ViewChangerProps {
  view: View;
  viewDate: Moment;
  onViewSwitch: () => void;
  onRangeSwitch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ViewChanger: React.FunctionComponent<ViewChangerProps> = ({
  view,
  viewDate,
  onViewSwitch,
  onRangeSwitch,
}) => (
  <div className="view-switcher">
    <RangeSwitcher value={-1} onClick={onRangeSwitch} />
    <ViewSwitcher label={getViewLabel(view, viewDate)} onClick={onViewSwitch} />
    <RangeSwitcher value={1} onClick={onRangeSwitch} />
  </div>
);
