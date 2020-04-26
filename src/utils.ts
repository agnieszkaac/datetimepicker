import { useEffect } from "react";
import moment, { Moment } from "moment";

import { DateType, MomentDate } from "./types";
import { View } from "./picker/types";

export const noop = () => null;

export const getMomentDate = (value?: DateType): MomentDate => {
  if (!value) {
    return undefined;
  }
  return moment(value);
};

export const getStringDate = (value: MomentDate, format: string): string => {
  if (!value) {
    return "";
  }
  return moment(value).format(format);
};

export const getDecadeStart = (date: Moment) =>
  Math.floor(moment(date).get("year") / 10) * 10;

export const togglePickerOpen = (
  pickerOpen: boolean,
  handleClick: (e: MouseEvent) => void,
) => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [pickerOpen]);
};

export const getDecadeLabel = (date: Moment) => {
  const decadeStart = getDecadeStart(date);
  return `${decadeStart} - ${decadeStart + 11}`;
};

export const getViewLabel = (view: View, viewDate: Moment) =>
  view === View.Year
    ? getDecadeLabel(viewDate)
    : viewDate.format(view === View.Month ? "YYYY" : "MMMM YYYY");

export const showDays = 42;

export const prevDaysOffset = (dayOfWeek: number) =>
  dayOfWeek === 0 ? 6 : dayOfWeek - 1;
