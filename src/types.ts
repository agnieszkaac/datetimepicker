import React, { Ref } from "react";

export interface DayProps {
  value: string;
  selected: boolean;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DayPickerProps {
  value: string;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InputProps {
  value?: string;
  inputRef: Ref<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PickerProps {
  value: string;
  pickerRef: Ref<HTMLDivElement>;
  onPick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DatePickerProps {
  value?: string;
  hideOnPick?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onPick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
