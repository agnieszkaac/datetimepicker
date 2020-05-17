import moment, { Moment } from "moment";

export enum View {
  Day,
  Month,
  Year,
}

export const getNextView = (dir: -1 | 1, curr: View) => {
  if ((dir > 0 && curr < View.Year) || (dir < 0 && curr > View.Day)) {
    return curr + dir;
  }
  return curr;
};

export const getViewChangeOffset = (dir: number, view: View) =>
  view === View.Year ? dir * 10 : dir;

export const getViewChangeUnit = (view: View) =>
  view === View.Day ? "month" : "year";

export const getViewDate = (dir: number, view: View, viewDate: Moment) => {
  const unit = getViewChangeUnit(view);
  return moment(viewDate)
    .add(getViewChangeOffset(dir, view), unit)
    .startOf(unit);
};
