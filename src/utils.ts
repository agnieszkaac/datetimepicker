import { useEffect } from "react";
import moment, { Moment } from "moment";

import { ValueDate } from "./types";
import { View } from "./picker/types";

export const noop = () => null;

export const parseValueToMoment = (value?: ValueDate): Moment | undefined => {
  if (value instanceof Date || typeof value === "string") {
    return moment(value);
  }
  return value;
};

export const parseMomentToString = (
  value: Moment | undefined,
  format: string,
): string => {
  if (!value) {
    return "";
  }
  return value.format(format);
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

export const configLocale = (
  date: Moment | undefined,
  locale: string,
  dow?: number,
) => {
  date?.locale(locale);
  if (dow) {
    console.log("test", dow);
    moment.updateLocale(locale, {
      week: {
        dow,
        doy: 7 + dow - 1,
      },
    });
  }
};
