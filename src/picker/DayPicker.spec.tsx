import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";

import { render } from "../__tests__/customRender";
import { PickerComponentProps, View } from "./types";

import { DayPicker } from "./DayPicker";

describe("<DayPicker />", () => {
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

  it("should render weekdays and 42 days", () => {
    const { getByTestId, getAllByTestId } = render(
      <DayPicker {...props} />,
      {},
      { view: View.Day, date, viewDate },
    );
    const weekDays = getByTestId("week-days");

    expect(weekDays).toBeInTheDocument();

    const days = getAllByTestId("day");

    expect(days.length).toBe(42);
  });

  it("should render proper amount of prev-day and next-day elements for default setup", () => {
    const { container } = render(
      <DayPicker {...props} />,
      {},
      { view: View.Day, date, viewDate },
    );
    const prevDays = container.querySelectorAll("button.prev-day");
    const nextDays = container.querySelectorAll("button.next-day");

    expect(prevDays.length).toBe(3);
    expect(nextDays.length).toBe(8);
  });

  it("should render one day marked as 'today' when in scope of viewDate", () => {
    const { container } = render(
      <DayPicker {...props} />,
      {},
      { view: View.Day, date, viewDate },
    );
    const days = container?.querySelectorAll(".is-today");

    expect(days?.length).toEqual(1);
  });

  it("should render none 'today' days when date not in scope od viewDate", () => {
    const { container } = render(
      <DayPicker {...props} />,
      {},
      { view: View.Day, date, viewDate: moment().add(3, "month") },
    );
    const days = container?.querySelectorAll(".is-today");

    expect(days?.length).toEqual(0);
  });

  it("should apply 'select' class to button having date value", () => {
    const { getByText, rerender } = render(
      <DayPicker {...props} />,
      {},
      { view: View.Day, date, viewDate },
    );
    let exampleDay = getByText("15");

    expect(exampleDay).not.toHaveClass("selected");

    date = moment().date(15);
    rerender(<DayPicker {...props} />, {}, { view: View.Day, date, viewDate });
    exampleDay = getByText("15");

    expect(exampleDay).toHaveClass("selected");
  });
});
