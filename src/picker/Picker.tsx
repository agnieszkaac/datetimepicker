import React, { useState } from "react";
import moment from "moment";

import { PickerProps, View } from "./types";
import { MonthPicker } from "./monthPicker";
import { DayPicker } from "./dayPicker";
import { YearPicker } from "./yearPicker";
import { ViewChanger } from "./viewChanger/ViewChanger";
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

  const switchView = (v = 1) => {
    if ((v === 1 && view < View.Year) || (v === -1 && view > View.Day)) {
      setView(view + v);
    }
  };

  const switchRange = (e: React.MouseEvent<HTMLButtonElement>) =>
    setViewDate(
      moment({ ...viewDate }).add(
        view === View.Year
          ? Number(e.currentTarget.value) * 10
          : e.currentTarget.value,
        view === View.Day ? "month" : "year",
      ),
    );

  const PickerComponent =
    view === View.Day
      ? DayPicker
      : view === View.Month
      ? MonthPicker
      : YearPicker;

  return (
    <div className="picker" ref={pickerRef}>
      <ViewChanger
        view={view}
        viewDate={viewDate}
        onViewSwitch={switchView}
        onRangeSwitch={switchRange}
      />
      <PickerComponent date={date} viewDate={viewDate} onPick={handlePick} />
    </div>
  );
};
