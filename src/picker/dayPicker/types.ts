import React from "react";
import { Moment } from "moment";

export interface DayProps {
  date: Moment;
  selected: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DayPickerProps {
  date: Moment | undefined;
  viewDate: Moment;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
