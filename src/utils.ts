import moment from "moment";

import { DateType, MomentDate } from "./types";

export const noop = () => null;

export const getMomentDate = (value?: DateType): MomentDate => {
  if (!value) {
    return undefined;
  }
  return moment(value);
};

export const getStringDate = (
  value: MomentDate,
  format: string = "DD-MMM-YYYY",
): string => {
  if (!value) {
    return "";
  }
  return moment(value).format(format);
};
