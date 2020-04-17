import React from "react";

import { noop } from "../utils";
import { InputProps } from "../types";
import "./Input.scss";

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
