import React from "react";
import { Moment } from "moment";

import { RangeSwitch } from "./RangeSwitch";
import { ViewSwitch } from "./ViewSwitch";

import { View } from "../utils";
import { getViewLabel } from "../../utils";

import "./Switch.scss";

export type SwitchProps = {
  view: View;
  viewDate: Moment;
  onViewSwitch: () => void;
  onRangeSwitch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Switch: React.FunctionComponent<SwitchProps> = ({
  view,
  viewDate,
  onViewSwitch,
  onRangeSwitch,
}) => (
  <div className="switch">
    <RangeSwitch value={-1} onClick={onRangeSwitch} />
    <ViewSwitch label={getViewLabel(view, viewDate)} onClick={onViewSwitch} />
    <RangeSwitch value={1} onClick={onRangeSwitch} />
  </div>
);
