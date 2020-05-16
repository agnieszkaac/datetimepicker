import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";
import { render } from "@testing-library/react";

import { MonthPicker, MonthPickerProps } from "../../picker/monthPicker";

describe("<MonthPicker /> should", () => {
  let date: Moment | undefined;
  let viewDate: Moment;
  const onPick = jest.fn((_e) => {});
  let props: MonthPickerProps;

  beforeEach(() => {
    MockDate.set("2020-01-01");

    date = undefined;
    viewDate = moment();
    props = {
      date,
      viewDate,
      onPick,
    };
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("match snapshot", () => {
    const { asFragment } = render(<MonthPicker {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("render 12 months in a grid", () => {
    const { getAllByTestId } = render(<MonthPicker {...props} />);
    const months = getAllByTestId("month");

    expect(months.length).toBe(12);
  });

  it("mark month as selected when date is passed", () => {
    const { getByText, rerender } = render(<MonthPicker {...props} />);
    const month = getByText("Mar");

    expect(month).not.toHaveClass("selected");

    props.date = moment("2020-03-01");
    rerender(<MonthPicker {...props} />);

    expect(month).toHaveClass("selected");
  });

  it("not mark any selected months when selected is not within viewDate", () => {
    props.date = moment();
    props.viewDate = moment("2021-01-01");

    const { asFragment } = render(<MonthPicker {...props} />);
    const months = asFragment().querySelectorAll(".selected");

    expect(months.length).toEqual(0);
  });

  it("mark one month as current month when within viewDate", () => {
    const { asFragment } = render(<MonthPicker {...props} />);
    const months = asFragment().querySelectorAll(".is-today");

    expect(months.length).toEqual(1);
  });

  it("not mark any current days when today is not within viewDate", () => {
    props.viewDate = moment("2021-01-01");

    const { asFragment } = render(<MonthPicker {...props} />);
    const months = asFragment().querySelectorAll(".is-today");

    expect(months.length).toEqual(0);
  });
});
