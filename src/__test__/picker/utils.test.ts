import MockDate from "mockdate";
import moment, { Moment } from "moment";

import {
  getNextView,
  getViewChangeOffset,
  getViewChangeUnit,
  getViewDate,
  View,
} from "../../picker/utils";

describe("getNextView() should", () => {
  it("return higher view if possible but not higher than Year", () => {
    const dir = 1;
    let curr = View.Day;

    curr = getNextView(dir, curr);
    expect(curr).toEqual(View.Month);

    curr = getNextView(dir, curr);
    expect(curr).toEqual(View.Year);

    curr = getNextView(dir, curr);
    expect(curr).toEqual(View.Year);
  });

  it("return lower view if possible but not lower than Day", () => {
    const dir = -1;
    let curr = View.Year;

    curr = getNextView(dir, curr);
    expect(curr).toEqual(View.Month);

    curr = getNextView(dir, curr);
    expect(curr).toEqual(View.Day);

    curr = getNextView(dir, curr);
    expect(curr).toEqual(View.Day);
  });
});

describe("getViewChangeOffset() should", () => {
  it("return singular offset for Day or Month view", () => {
    expect(getViewChangeOffset(-1, View.Day)).toEqual(-1);
    expect(getViewChangeOffset(1, View.Day)).toEqual(1);

    expect(getViewChangeOffset(-1, View.Month)).toEqual(-1);
    expect(getViewChangeOffset(1, View.Month)).toEqual(1);
  });
  it("return decade offset for Year view", () => {
    expect(getViewChangeOffset(-1, View.Year)).toEqual(-10);
    expect(getViewChangeOffset(1, View.Year)).toEqual(10);
  });
});

describe("getViewChangeUnit() should", () => {
  it("return month change unit for Day view", () => {
    expect(getViewChangeUnit(View.Day)).toEqual("month");
  });
  it("return year change unit for any other than Day view", () => {
    expect(getViewChangeUnit(View.Month)).toEqual("year");
    expect(getViewChangeUnit(View.Year)).toEqual("year");
  });
});

describe("getViewDate() should", () => {
  let viewDate: Moment;

  beforeEach(() => {
    MockDate.set("2020-01-01");
    viewDate = moment();
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("return previous month in Day view", () => {
    const dir = -1;
    const view = View.Day;

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2019-12-01");

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2019-11-01");
  });
  it("return next month in Day view", () => {
    const dir = 1;
    const view = View.Day;

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2020-02-01");

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2020-03-01");
  });
  it("return previous year in Month view", () => {
    const dir = -1;
    const view = View.Month;

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2019-01-01");

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2018-01-01");
  });
  it("return next year in Month view", () => {
    const dir = 1;
    const view = View.Month;

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2021-01-01");

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2022-01-01");
  });
  it("return previous decade in Year view", () => {
    const dir = -1;
    const view = View.Year;

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2010-01-01");

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2000-01-01");
  });
  it("return next decade in Year view", () => {
    const dir = 1;
    const view = View.Year;

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2030-01-01");

    viewDate = getViewDate(dir, view, viewDate);
    expect(viewDate.format("YYYY-MM-DD")).toEqual("2040-01-01");
  });
});
