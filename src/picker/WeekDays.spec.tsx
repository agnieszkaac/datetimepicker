import React from "react";
import MockDate from "mockdate";
import moment from "moment";
import { render } from "@testing-library/react";

import { WeekDays } from "./WeekDays";

describe("<WeekDays />", () => {
  beforeEach(() => {
    MockDate.set("2020-01-01");
  });

  it("should render 7 week days", () => {
    const { getAllByTestId } = render(<WeekDays />);
    const days = getAllByTestId("day-of-week");

    expect(days.length).toBe(7);
  });

  it("should show proper first day of week, with or without locale updates", () => {
    const { getAllByTestId, rerender } = render(<WeekDays />);
    const days = getAllByTestId("day-of-week");

    expect(days[0]).toHaveTextContent("Sun");
  });

  it("should show Monday as first day of week after locale update", () => {
    const { getAllByTestId, rerender } = render(<WeekDays />);

    moment.updateLocale("en", {
      week: {
        dow: 1,
        doy: 1,
      },
    });
    rerender(<WeekDays />);

    const days = getAllByTestId("day-of-week");

    expect(days[0]).toHaveTextContent("Mon");
  });
});
