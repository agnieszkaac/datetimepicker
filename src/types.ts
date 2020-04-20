import React from "react";
import { Moment } from "moment";

//TODO: better naming for input date type, and internal date type
export type DateType = Moment | Date | string;

export type MomentDate = Moment | undefined;

//props
export interface DatePickerProps {
  value?: DateType;
  hideOnPick?: boolean;
  displayFormat?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onPick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
