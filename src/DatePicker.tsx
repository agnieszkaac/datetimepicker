import React, { Ref, useRef, useState } from "react";
import moment from "moment";

import { DatePickerProps } from "./";
import { Picker } from "./picker/Picker";
import { Input } from "./input/Input";
import {
  noop,
  parseValueToMoment,
  togglePickerOpen,
  configLocale,
} from "./utils";
import "./DatePicker.scss";

export const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  value,
  hideOnPick = false,
  displayFormat,
  locale = "en",
  firstDayOfWeek= 0,
  onClick = noop,
  onBlur = noop,
  onPick = noop,
}) => {
  const wrapperRef: Ref<HTMLDivElement> = useRef(null);
  const pickerRef: Ref<HTMLDivElement> = useRef(null);
  const inputRef: Ref<HTMLInputElement> = useRef(null);

  const [date, setDate] = useState(parseValueToMoment(value));
  const [pickerOpen, setPickerOpen] = useState(false);

  configLocale(date, locale);

  const handleClickListener = (event: MouseEvent) => {
    if (!wrapperRef.current?.contains(event.target as Node)) {
      setPickerOpen(false);
    }
    if (
      inputRef.current?.contains(event.target as Node) ||
      (pickerRef.current?.contains(event.target as Node) && hideOnPick)
    ) {
      setPickerOpen(!pickerOpen);
    }
  };
  togglePickerOpen(pickerOpen, handleClickListener);

  const handlePick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDate(moment(e.currentTarget.value));
    onPick(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div ref={wrapperRef} className="wrapper">
      <Input
        value={date}
        format={displayFormat}
        inputRef={inputRef}
        onClick={onClick}
        onBlur={onBlur}
        onChange={handleChange}
      />
      {pickerOpen && (
        <Picker
          date={date}
          locale={locale}
          firstDayOfWeek={firstDayOfWeek}
          pickerRef={pickerRef}
          onPick={handlePick}
        />
      )}
    </div>
  );
};
