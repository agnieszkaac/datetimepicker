import { useEffect } from "react";
import moment, { Moment } from "moment";

import { DateType, MomentDate } from "./types";

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
