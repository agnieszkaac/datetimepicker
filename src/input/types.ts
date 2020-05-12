import React, { Ref } from "react";
import { Moment } from "moment";

export interface InputProps {
  value?: Moment;
  format?: string;
  inputRef: Ref<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
