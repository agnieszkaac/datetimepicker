import React from "react";

export interface MonthProps {
  value: string;
  selected: boolean;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface MonthPickerProps {
  value: string;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
