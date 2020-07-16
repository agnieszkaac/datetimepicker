import moment, { Moment } from "moment";

export type ValueDate = Moment | Date | string;

export const noop = () => null;

/*
 * parseValueToMoment
 *
 * It parses the input value of the picker from whatever type into Moment.
 */
export const parseValueToMoment = (value: ValueDate): Moment => {
  if (value instanceof Date || typeof value === "string") {
    return moment(value);
  }
  return value;
};