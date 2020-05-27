import React from "react";

export type ViewChangerProps = {
  label: string;
  onClick: () => void;
}

export const ViewSwitcher: React.FunctionComponent<ViewChangerProps> = ({
  label,
  onClick,
}) => (
  <button className="view-changer" onClick={() => onClick()}>
    {label}
  </button>
);
