import React, { Ref } from "react";

import { noop } from "../utils";

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
}) => {
  return (
    <input
      name="datepicker-input"
      ref={inputRef}
      value={value}
      onClick={onClick}
      onBlur={onBlur}
    />
  );
};
