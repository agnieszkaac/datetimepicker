import React from "react";

import { getStringDate, noop } from "../utils";
import { InputProps } from "./types";
import "./Input.scss";

export const Input: React.FunctionComponent<InputProps> = ({
  value,
  format = "MM-DD-YYYY",
  inputRef,
  onClick = noop,
  onBlur = noop,
  onChange = noop,
}) => (
  <input
    name="datepicker-input"
    className="datepicker-input"
    ref={inputRef}
    value={getStringDate(value, format)}
    onClick={onClick}
    onBlur={onBlur}
    onChange={onChange}
  />
);
