import React from "react";

import { getViewLabel } from "../utils";
import { ViewContext } from "../state/ViewContext";

import "./ViewChanger.scss";

export type ViewChangerProps = {
  onViewSwitch: () => void;
  onRangeSwitch: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ViewChanger: React.FC<ViewChangerProps> = ({
  onViewSwitch,
  onRangeSwitch,
}) => {
  const { view, viewDate } = React.useContext(ViewContext);
  return (
    <div className="view-switcher">
      <button className="range-changer" value={-1} onClick={onRangeSwitch}>
        <span>&#10094;</span>
      </button>
      <button className="view-changer" onClick={onViewSwitch}>
        {getViewLabel(view, viewDate)}
      </button>
      <button className="range-changer" value={1} onClick={onRangeSwitch}>
        <span>&#10095;</span>
      </button>
    </div>
  );
};
