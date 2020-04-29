import moment, { Moment } from "moment";

export const weekDaysNumber = 7; //Always show 7 week days => columns
export const showDaysNumber = 42; //Always show 6 weeks => rows

//dayOfWeek is a number in [0 - 6] value range
//return value should be in [1 - weekDaysNumber] value range
export const prevDaysOffset = (dayOfWeek: number) =>
  dayOfWeek === 0 ? weekDaysNumber : dayOfWeek;

export const viewData = (viewDate: Moment, date?: Moment) => {
  const offset = prevDaysOffset(moment(viewDate).date(1).weekday()) - 1; //0-6
  const prevMonth = moment(viewDate).subtract(1, "M");
  const nextMonth = moment(viewDate).add(1, "M");
  let selected = -1;

  if (date?.isSame(prevMonth, "M")) {
    selected = date?.date() - prevMonth.daysInMonth() + offset;
  }
  if (date?.isSame(viewDate, "M")) {
    selected = date?.date() + offset;
  }
  if (date?.isSame(nextMonth, "M")) {
    selected = date?.date() + viewDate.daysInMonth() + offset;
  }

  return { offset, prevMonth, nextMonth, selected };
};