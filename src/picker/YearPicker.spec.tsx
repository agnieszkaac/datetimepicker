import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";

import { PickerComponentProps, View } from "./types";

import { YearPicker } from "./YearPicker";
import { render } from "../__tests__/customRender";

describe("<YearPicker />", () => {
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

  it("should render 12 years", () => {
    const { getAllByTestId } = render(
      <YearPicker {...props} />,
      {},
      { view: View.Year, date, viewDate },
    );
    const years = getAllByTestId("year");

    expect(years.length).toBe(12);
  });

  it("should show a year as current when in scope of viewDate", () => {
    const { getByText } = render(
      <YearPicker {...props} />,
      {},
      { view: View.Year, date, viewDate },
    );
    const year2020 = getByText("2020");

    expect(year2020).toHaveClass("is-today");
  });

  it("should not show a current year when not in scope of viewDate", () => {
    viewDate = moment().year(20).startOf("year");
    const { container } = render(
      <YearPicker {...props} />,
      {},
      { view: View.Year, date, viewDate },
    );
    const currentYears = container?.querySelectorAll(".is-today");

    expect(currentYears?.length).toEqual(0);
  });

  it("should show selected year", () => {
    const { getByText } = render(
      <YearPicker {...props} />,
      {},
      { view: View.Year, date, viewDate },
    );
    const selected = getByText("2020");

    expect(selected).toHaveClass("selected");
  });
});
