import React, { Ref, useEffect, useRef, useState } from "react";

import { Picker } from "./picker/Picker";
import { Input } from "./input/Input";
import { noop, getMomentDate } from "./utils";
import { DatePickerProps } from "./types";
import "./DatePicker.scss";
import moment from "moment";

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

  const [date, setDate] = useState(getMomentDate(value));
  console.log("DatePicker", date);
  const [pickerOpen, setPickerOpen] = useState(false);

  //TODO: extract clickListener to utils
  const handleClickListener = (event: MouseEvent) => {
    if (!wrapperRef.current?.contains(event.target as Node)) {
      setPickerOpen(false);
    }
    if (inputRef.current?.contains(event.target as Node)) {
      setPickerOpen(!pickerOpen);
    }
    if (pickerRef.current?.contains(event.target as Node) && hideOnPick) {
      setPickerOpen(!pickerOpen);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickListener);
    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [pickerOpen]);

  const handlePick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDate(moment(e.currentTarget.value, "MM"));
    onPick(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div ref={wrapperRef} className="wrapper">
      <Input
        value={date}
        inputRef={inputRef}
        onClick={onClick}
        onBlur={onBlur}
        onChange={handleChange}
      />
      {pickerOpen && (
        <Picker date={date} pickerRef={pickerRef} onPick={handlePick} />
      )}
    </div>
  );
};
