import React, { Ref, useEffect, useRef, useState } from "react";
import moment from "moment";

import { DateProvider } from "./state";

import { noop, parseValueToMoment, ValueDate } from "./utils";
import { Picker } from "./picker/Picker";
import { Input } from "./input/Input";

import "./DatePicker.scss";

export interface DatePickerProps {
  value?: ValueDate;
  hideOnPick?: boolean;
  displayFormat?: string;
  locale?: string;
  //[0-6] where 0 is Sunday, 6 is Saturday. Default 0
  firstDayOfWeek?: number;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onPick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DatePicker: React.FunctionComponent<DatePickerProps> = (props) => {
  const {
    value,
    hideOnPick = false,
    displayFormat,
    locale = "en",
    firstDayOfWeek = 0,
    onClick = noop,
    onBlur = noop,
    onPick = noop,
  } = props;
  const wrapperRef: Ref<HTMLDivElement> = useRef(null);
  const pickerRef: Ref<HTMLDivElement> = useRef(null);
  const inputRef: Ref<HTMLInputElement> = useRef(null);

  const [date, setDate] = useState(
    value ? parseValueToMoment(value) : undefined,
  );
  const [pickerOpen, setPickerOpen] = useState(false);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickListener);
    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [pickerOpen]);

  const handlePick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDate(moment(e.currentTarget.value));
    onPick(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <DateProvider date={date}>
      <div ref={wrapperRef} className="wrapper">
        <Input
          format={displayFormat}
          inputRef={inputRef}
          onClick={onClick}
          onBlur={onBlur}
          onChange={handleChange}
        />
        {pickerOpen && (
          <Picker
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            pickerRef={pickerRef}
            onPick={handlePick}
          />
        )}
      </div>
    </DateProvider>
  );
};
