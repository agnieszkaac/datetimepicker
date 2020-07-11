import React, { useState } from "react";
import moment from "moment";

import { PickerComponentProps, PickerProps, View } from "./types";
import { ViewContext } from "../state/ViewContext";
import { DateContext } from "../state/DateContext";
import { getHigherView, getLowerView, getViewDate } from "./utils";
import { configLocale } from "../utils";

import { MonthPicker } from "./monthPicker";
import { DayPicker } from "./dayPicker";
import { YearPicker } from "./yearPicker";
import { ViewChanger } from "./ViewChanger";
import "./Picker.scss";

const PickerComponent: {
  [key in View]: React.ComponentType<PickerComponentProps>;
} = {
  [View.Day]: DayPicker,
  [View.Month]: MonthPicker,
  [View.Year]: YearPicker,
};

export const Picker: React.FC<PickerProps> = ({
  locale,
  firstDayOfWeek,
  pickerRef,
  onPick,
}) => {
  const { date } = React.useContext(DateContext);

  const [view, setView] = useState(View.Day);
  const [viewDate, setViewDate] = useState(moment(date).startOf("M"));

  configLocale(viewDate, locale, firstDayOfWeek);

  const handlePick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setViewDate(moment(e.currentTarget.value));
    if (view === View.Day) {
      onPick(e);
      return;
    }
    setView(getLowerView(view));
  };

  const handleRangeSwitch = (e: React.MouseEvent<HTMLButtonElement>) => {
    setViewDate(getViewDate(Number(e.currentTarget.value), view, viewDate));
  };

  const Component = PickerComponent[view];

  return (
    <div ref={pickerRef} className="picker">
      <ViewContext.Provider value={{ viewDate, view }}>
        <ViewChanger
          onViewSwitch={() => setView(getHigherView(view))}
          onRangeSwitch={handleRangeSwitch}
        />
        <Component onPick={handlePick} />
      </ViewContext.Provider>
    </div>
  );
};
