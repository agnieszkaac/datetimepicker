import React, { useContext } from "react";

import { parseMomentToString, noop } from "../utils";
import { InputProps } from "./types";
import "./Input.scss";
import { DateContext } from "../state/DateContext";

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
      value={parseMomentToString(date, format)}
      onClick={onClick}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};
