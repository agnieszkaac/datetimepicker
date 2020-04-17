import React, { Ref } from "react";

export interface DatePickerProps {
  value?: string;
  hideOnPick?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onPick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface InputProps {
  value?: string;
  inputRef: Ref<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface PickerProps {
  pickerRef: Ref<HTMLDivElement>;
  onPick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
