import React from "react";

export type ViewSwitchProps = {
  label: string;
  onClick: () => void;
};

export const ViewSwitch: React.FunctionComponent<ViewSwitchProps> = ({
  label,
  onClick,
}) => (
  <button
    data-testid="view-switch"
    className="view-switch"
    onClick={onClick}
  >
    {label}
  </button>
);
