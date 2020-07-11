import moment, { Moment } from "moment";
import { View } from "./types";

export const weekDaysNumber = 7; //Always show 7 week days => columns
export const showDaysNumber = 42; //Always show 6 weeks => rows
export const defaultGridSize = 12; //Always show 12 months and years in a grid

//dayOfWeek is a number in [0 - 6] value range
//return value should be in [1 - weekDaysNumber] value range
export const prevDaysOffset = (dayOfWeek: number) =>
  dayOfWeek === 0 ? weekDaysNumber : dayOfWeek;

export const viewData = (date: Moment) => {
  const offset = prevDaysOffset(moment(date).date(1).weekday()) - 1; //0-6
  const prevMonth = moment(date).subtract(1, "M");
  const nextMonth = moment(date).add(1, "M");

  return { offset, prevMonth, nextMonth };
};

export const getLowerView = (view: View) =>
  view !== View.Day ? view - 1 : view;

export const getHigherView = (view: View) =>
  view !== View.Year ? view + 1 : view;

export const getViewChangeUnit = (view: View) =>
  view === View.Day ? "month" : "year";

export const getViewChangeOffset = (dir: number, view: View) =>
  view === View.Year ? dir * 10 : dir;

export const getViewDate = (dir: number, view: View, viewDate: Moment) => {
  const unit = getViewChangeUnit(view);

  return moment(viewDate)
    .add(getViewChangeOffset(dir, view), unit)
    .startOf(unit);
};
