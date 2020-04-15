import React, { useRef, useState } from "react";

import { Picker } from "./picker/Picker";
import { Input } from "./input/Input";
import { noop } from "./utils";

interface DatePickerProps {
  value?: string;
  hideOnPick?: boolean;
  onClick?: Function;
  onBlur?: Function;
}

export const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  value,
  hideOnPick = true,
  onClick = noop,
  onBlur = noop,
}) => {
  const pickerRef = useRef(null);
  const inputRef = useRef(null);
  const [pickerOpen, setPickerOpen] = useState(false);

  const togglePicker = () => setPickerOpen(!pickerOpen);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    onClick();
    console.log(e.currentTarget.name);
    togglePicker();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur();
    console.log(e.currentTarget.name);
    if (hideOnPick) {
      togglePicker();
    }
  };

  const handlePick = () => {
    if (hideOnPick) {
      togglePicker();
    }
  };
  return (
    <>
      <Input
        inputRef={inputRef}
        value={value}
        onClick={handleClick}
        onBlur={handleBlur}
      />
      {pickerOpen && <Picker pickerRef={pickerRef} onPick={handlePick} />}
    </>
  );
};
