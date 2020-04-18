import React from "react";

export interface DayProps {
  value: string;
  selected: boolean;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DayPickerProps {
  value: string;
  monthLength: number;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
