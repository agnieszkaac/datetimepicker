import React, { useContext } from "react";

import { DateContext } from "../state";
import { noop } from "../utils";
import { InputProps } from "./types";

import "./Input.scss";

export const Input: React.FunctionComponent<InputProps> = ({
  format = "MM-DD-YYYY",
  inputRef,
  onClick = noop,
  onBlur = noop,
  onChange = noop,
}) => {
  const { date } = useContext(DateContext);
  return (
    <input
      name="datepicker-input"
      className="datepicker-input"
      ref={inputRef}
      value={date ? date.format(format) : undefined}
      onClick={onClick}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};
