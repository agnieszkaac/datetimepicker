import React from "react";
import MockDate from "mockdate";
import { render } from "@testing-library/react";
import moment from "moment";

import { showDaysNumber, weekDaysNumber } from "./utils";
import { PickerComponentProps, View } from "./types";
import { DayPicker } from "./DayPicker";
import { DateProvider, ViewProvider } from "../state";

describe("<DayPicker />", () => {
  let props: PickerComponentProps;

  beforeEach(() => {
    MockDate.set("2020-01-01");

    props = {
      onPick: jest.fn(),
    };
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("should render 7 week days", () => {
    const { getAllByTestId } = render(
      <ViewProvider view={View.Day} viewDate={moment().startOf("month")}>
        <DateProvider date={moment()}>
          <DayPicker {...props} />
        </DateProvider>
      </ViewProvider>,
    );
    const weekDays = getAllByTestId("day-of-week");

    expect(weekDays.length).toBe(weekDaysNumber);
  });

  it("should show Monday as first day of week on default setting", () => {});
  it("should show other day as first day of week when setting changed", () => {});

  it("should render 42 days", () => {
    const { getAllByTestId } = render(<DayPicker {...props} />);
    const days = getAllByTestId("day");

    expect(days.length).toBe(showDaysNumber);
  });

  it("render prev-day and next-day elements for default setup", () => {
    const { container } = render(
      <ViewProvider view={View.Day} viewDate={moment().startOf("month")}>
        <DateProvider date={moment()}>
          <DayPicker {...props} />
        </DateProvider>
      </ViewProvider>,
    );
    const prevDays = container.querySelectorAll("button.prev-day");
    const nextDays = container.querySelectorAll("button.next-day");

    expect(prevDays.length).toBe(3);
    expect(nextDays.length).toBe(
      showDaysNumber - prevDays.length - moment().daysInMonth(),
    );
  });
});
