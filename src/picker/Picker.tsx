import React, { useState } from "react";
import moment from "moment";

import { PickerProps, View } from "./types";
import { MonthPicker } from "./monthPicker";
import { DayPicker } from "./dayPicker";
import { YearPicker } from "./yearPicker";
import { ViewSwitcher } from "./ViewSwitcher";
import { RangeChanger } from "./RangeChanger";
import "./Picker.scss";

export const Picker: React.FunctionComponent<PickerProps> = ({
  date,
  pickerRef,
  onPick,
}) => {
  const [view, setView] = useState(View.Day);
  const [viewDate, setViewDate] = useState(moment(date));

  const handlePick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (view === View.Day) {
      onPick(e);
      return;
    }
    setViewDate(moment(e.currentTarget.value));
    switchViewDown();
  };

  const switchViewUp = () =>
    setView(
      view === View.Day
        ? View.Month
        : view === View.Month
        ? View.Year
        : View.Year,
    );

  const switchViewDown = () =>
    setView(
      view === View.Year
        ? View.Month
        : view === View.Month
        ? View.Day
        : View.Day,
    );

  const changeRange = (e: React.MouseEvent<HTMLButtonElement>) => {
    let range;
    if (view === View.Day) {
      range = View.Month;
    }
    if (view === View.Month) {
      range = View.Year;
    }
    setViewDate(moment({ ...viewDate }).add(e.currentTarget.value, range));
  };

  const PickerComponent =
    view === View.Day
      ? DayPicker
      : view === View.Month
      ? MonthPicker
      : YearPicker;

  return (
    <div className="picker" ref={pickerRef}>
      <ViewSwitcher viewDate={viewDate} view={view} onClick={switchViewUp} />
      <div className="wrapper">
        <RangeChanger value={-1} onClick={changeRange} />
        <PickerComponent date={date} viewDate={viewDate} onPick={handlePick} />
        <RangeChanger value={1} onClick={changeRange} />
      </div>
    </div>
  );
};
