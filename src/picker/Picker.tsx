import React, { useState } from "react";
import moment from "moment";

import { noop } from "../utils";
import { PickerProps, View } from "./types";
import { MonthPicker } from "../monthPicker";
import { DayPicker } from "../dayPicker";
import { YearPicker } from "../yearPicker";
import "./Picker.scss";
import { Switch } from "./Switch";

export const Picker: React.FunctionComponent<PickerProps> = ({
  date,
  pickerRef,
  onPick = noop,
}) => {
  const [view, setView] = useState(View.Day);
  const [viewDate, setViewDate] = useState(moment(date));

  const handleMonthPick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setViewDate(moment(e.currentTarget.value));
    setView(View.Day);
  };
  const handleYearPick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setViewDate(moment(e.currentTarget.value));
    setView(View.Month);
  };

  const changeView = () => {
    setView(
      view === View.Day
        ? View.Month
        : view === View.Month
        ? View.Year
        : View.Year,
    );
  };

  const changeRange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const copyViewDate = { ...viewDate };
    if (view === View.Day) {
      setViewDate(moment(copyViewDate).add(e.currentTarget.value, View.Month));
    }
    if (view === View.Month) {
      setViewDate(moment(copyViewDate).add(e.currentTarget.value, View.Year));
    }
  };

  return (
    <div className="picker" ref={pickerRef}>
      <Switch viewDate={viewDate} view={view} onClick={changeView} />
      <div className="wrapper">
        <button value={-1} onClick={changeRange}>
          -
        </button>
        {view === View.Day && (
          <DayPicker date={date} viewDate={viewDate} onPick={onPick} />
        )}
        {view === View.Month && (
          <MonthPicker
            date={date}
            viewDate={viewDate}
            onPick={handleMonthPick}
          />
        )}
        {view === View.Year && (
          <YearPicker date={date} viewDate={viewDate} onPick={handleYearPick} />
        )}
        <button value={1} onClick={changeRange}>
          +
        </button>
      </div>
    </div>
  );
};
