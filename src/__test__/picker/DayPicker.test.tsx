import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";
import { render } from "@testing-library/react";

import { DayPicker, DayPickerProps } from "../../picker/dayPicker";

describe("<DayPicker /> should", () => {
  let date: Moment | undefined;
  let viewDate: Moment;
  const onPick = jest.fn((_e) => {});
  let props: DayPickerProps;

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
    const { asFragment } = render(<DayPicker {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("render 42 days in a grid", () => {
    const { getAllByTestId } = render(<DayPicker {...props} />);
    const days = getAllByTestId("day");

    expect(days.length).toBe(42);
  });

  it("mark day as selected when date prop is passed", () => {
    const { getByText, rerender } = render(<DayPicker {...props} />);
    const day = getByText("15");

    expect(day).not.toHaveClass("selected");

    props.date = moment("2020-01-15");
    rerender(<DayPicker {...props} />);

    expect(day).toHaveClass("selected");
  });

  it("not mark any selected days when selected is not within viewDate", () => {
    props.date = moment();
    props.viewDate = moment("2020-10-10");

    const { asFragment } = render(<DayPicker {...props} />);
    const days = asFragment().querySelectorAll(".selected");

    expect(days.length).toEqual(0);
  });

  it("mark one day as current day when within viewDate", () => {
    const { asFragment } = render(<DayPicker {...props} />);
    const days = asFragment().querySelectorAll(".is-today");

    expect(days.length).toEqual(1);
  });

  it("not mark any current days when today is not within viewDate", () => {
    props.viewDate = moment("2020-10-10");

    const { asFragment } = render(<DayPicker {...props} />);
    const days = asFragment().querySelectorAll(".is-today");

    expect(days.length).toEqual(0);
  });

  it("render 3 prev-month and 8 next-month days", () => {
    const { container } = render(<DayPicker {...props} />);
    const prevDays = container.querySelectorAll(".prev-month");
    const nextDays = container.querySelectorAll(".next-month");

    expect(prevDays.length).toEqual(3);
    expect(nextDays.length).toEqual(8);
  });
});
