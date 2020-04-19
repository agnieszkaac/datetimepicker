import React, { useState } from "react";

import { noop } from "../utils";
import { PickerProps, View } from "./types";
import { MonthPicker } from "../monthPicker";
import { DayPicker } from "../dayPicker";
import "./Picker.scss";
import moment from "moment";

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

  const changeView = () => {
    setView(
      view === View.Day
        ? View.Month
        : view === View.Month
        ? View.Year
        : View.Year,
    );
  };

  return (
    <div className="picker" ref={pickerRef}>
      <div className="view-changer" onClick={changeView}>
        {viewDate.format("MMMM YYYY")}
      </div>
      <div className="wrapper">
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
        {view === View.Year && "Year view"}
      </div>
    </div>
  );
};
