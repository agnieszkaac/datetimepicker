import React, { Ref, useEffect, useRef, useState } from "react";

import { Picker } from "./picker/Picker";
import { Input } from "./input/Input";
import { noop } from "./utils";
import "./DatePicker.scss";

interface DatePickerProps {
  value?: string;
  hideOnPick?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onPick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  value,
  hideOnPick = false,
  onClick = noop,
  onBlur = noop,
  onPick = noop,
}) => {
  const wrapperRef: Ref<HTMLDivElement> = useRef(null);
  const pickerRef: Ref<HTMLDivElement> = useRef(null);
  const inputRef: Ref<HTMLInputElement> = useRef(null);

  const [pickerOpen, setPickerOpen] = useState(false);

  const handleClickListener = (event: MouseEvent) => {
    if (!wrapperRef.current?.contains(event.target)) {
      setPickerOpen(false);
    }
    if (inputRef.current?.contains(event.target)) {
      setPickerOpen(!pickerOpen);
    }
    if (pickerRef.current?.contains(event.target) && hideOnPick) {
      setPickerOpen(!pickerOpen);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickListener);
    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [pickerOpen]);

  return (
    <div ref={wrapperRef} className="wrapper">
      <Input
        value={value}
        inputRef={inputRef}
        onClick={onClick}
        onBlur={onBlur}
      />
      {pickerOpen && <Picker pickerRef={pickerRef} onPick={onPick} />}
    </div>
  );
};
