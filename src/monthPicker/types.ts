import React from "react";
import { Moment } from "moment";

export interface MonthProps {
  date: Moment;
  selected: boolean;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface MonthPickerProps {
  date: Moment | undefined;
  viewDate: Moment;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
