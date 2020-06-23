import React, { Ref, useState } from "react";
import moment, { Moment } from "moment";

import { getNextView, getViewDate, View } from "./utils";
import { MonthPicker } from "./monthPicker";
import { DayPicker } from "./dayPicker";
import { YearPicker } from "./yearPicker";
import { Switch } from "./switch/Switch";
import { configLocale } from "../utils";

import "./Picker.scss";

export type PickerProps = {
  date: Moment | undefined;
  locale: string;
  firstDayOfWeek: number | undefined;
  pickerRef: Ref<HTMLDivElement>;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Picker: React.FunctionComponent<PickerProps> = ({
  date,
  locale,
  firstDayOfWeek,
  pickerRef,
  onPick,
}) => {
  const [view, setView] = useState(View.Day);
  const [viewDate, setViewDate] = useState(moment(date).startOf("M"));

  // configLocale(viewDate, locale, firstDayOfWeek);

  const handlePick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (view === View.Day) {
      onPick(e);
      return;
    }
    setViewDate(moment(e.currentTarget.value).startOf("M"));
    setView(getNextView(-1, view));
  };

  const handleRangeSwitch = (e: React.MouseEvent<HTMLButtonElement>) => {
    setViewDate(getViewDate(Number(e.currentTarget.value), view, viewDate));
  };

  const PickerComponent =
    view === View.Day
      ? DayPicker
      : view === View.Month
      ? MonthPicker
      : YearPicker;

  return (
    <div className="picker" ref={pickerRef}>
      <Switch
        view={view}
        viewDate={viewDate}
        onViewSwitch={() => setView(getNextView(1, view))}
        onRangeSwitch={handleRangeSwitch}
      />
      <PickerComponent date={date} viewDate={viewDate} onPick={handlePick} />
    </div>
  );
};
