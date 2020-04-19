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
    switchView(-1);
  };

  const switchView = (v: number) => setView(view + v);

  const changeRange = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (view === View.Day) {
      setViewDate(moment({ ...viewDate }).add(e.currentTarget.value, "month"));
    }
    if (view === View.Month) {
      setViewDate(moment({ ...viewDate }).add(e.currentTarget.value, "year"));
    }
  };

  const PickerComponent =
    view === View.Day
      ? DayPicker
      : view === View.Month
      ? MonthPicker
      : YearPicker;

  return (
    <div className="picker" ref={pickerRef}>
      <ViewSwitcher
        viewDate={viewDate}
        view={view}
        onClick={() => switchView(+1)}
      />
      <div className="wrapper">
        <RangeChanger value={-1} onClick={changeRange} />
        <PickerComponent date={date} viewDate={viewDate} onPick={handlePick} />
        <RangeChanger value={1} onClick={changeRange} />
      </div>
    </div>
  );
};
