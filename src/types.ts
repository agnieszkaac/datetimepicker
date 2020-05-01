import React from "react";
import { Moment } from "moment";

export type ValueDate = Moment | Date | string;

export interface DatePickerProps {
  value?: ValueDate;
  hideOnPick?: boolean;
  displayFormat?: string;
  locale?: string;
  //[0-6] where 0 is Sunday, 6 is Saturday. Default 0
  firstDayOfWeek?: number;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onPick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
