import React, { Ref } from "react";

import { noop } from "../utils";
import "./Input.scss";

interface InputProps {
  value?: string;
  inputRef: Ref<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<InputProps> = ({
  value,
  inputRef,
  onClick = noop,
  onBlur = noop,
}) => (
  <input
    name="datepicker-input"
    className="datepicker-input"
    ref={inputRef}
    value={value}
    onClick={onClick}
    onBlur={onBlur}
  />
);
