import React from "react";
import { Moment } from "moment";

export interface YearProps {
  date: Moment;
  selected: boolean;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface YearPickerProps {
  date: Moment | undefined;
  viewDate: Moment;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
