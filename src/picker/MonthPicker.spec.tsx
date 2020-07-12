import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";

import { MonthPicker } from "./MonthPicker";
import { render } from "../__tests__/customRender";
import { PickerComponentProps, View } from "./types";

describe("<MonthPicker />", () => {
  let props: PickerComponentProps;
  let date: Moment;
  let viewDate: Moment;

  beforeEach(() => {
    MockDate.set("2020-01-01");

    date = moment();
    viewDate = moment().startOf("month");

    props = {
      onPick: jest.fn(),
    };
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("should render 12 months", () => {
    const { getAllByTestId } = render(
      <MonthPicker {...props} />,
      {},
      { view: View.Month, date, viewDate },
    );
    const months = getAllByTestId("month");

    expect(months.length).toBe(12);
  });

  it("should show a month as current when in scope of viewDate", () => {
    const { getByText } = render(
      <MonthPicker {...props} />,
      {},
      { view: View.Month, date, viewDate },
    );
    let jan = getByText("Jan");

    expect(jan).toHaveClass("is-today");
  });

  it("should not show a current month when not in scope of viewDate", () => {
    viewDate = moment().year(5).startOf("month");
    const { getByText, rerender } = render(
      <MonthPicker {...props} />,
      {},
      { view: View.Month, date, viewDate },
    );
    let jan = getByText("Jan");

    expect(jan).not.toHaveClass("selected"); //selected Jan is in year 2020
  });

  it("should apply 'selected' class to button having date value", () => {
    const { getByText, rerender } = render(
      <MonthPicker {...props} />,
      {},
      { view: View.Month, date, viewDate },
    );
    let may = getByText("May");

    expect(may).not.toHaveClass("selected");

    date = moment().month(4); //months in moment.js are indexed from 0
    rerender(
      <MonthPicker {...props} />,
      {},
      { view: View.Month, date, viewDate },
    );

    may = getByText("May");

    expect(may).toHaveClass("selected");
  });
});
