import React from "react";
import { MomentDate } from "../types";

export interface MonthProps {
  value: number;
  selected: boolean;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface MonthPickerProps {
  date: MomentDate;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
