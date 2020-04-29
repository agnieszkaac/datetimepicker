import React from "react";
import { render, fireEvent } from "@testing-library/react";
import moment from "moment";

import { DayPicker } from "./";
import { setDate } from "../../testUtils";
import { showDaysNumber } from "./utils";

const today = "2020-01-01";
setDate(today);

const onPick = jest.fn((_e) => {});
const props = {
  viewDate: moment(),
  onPick,
};

describe("<DayPicker /> should", () => {
  it("match snapshot", () => {
    const { asFragment } = render(<DayPicker {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("render prev-day and next-day elements for default setup", () => {
    const { container } = render(<DayPicker {...props} />);
    const prevDays = container.querySelectorAll("button.prev-day");
    const nextDays = container.querySelectorAll("button.next-day");

    expect(prevDays.length).toBe(3);
    expect(nextDays.length).toBe(
      showDaysNumber - prevDays.length - props.viewDate.daysInMonth(),
    );
  });
});
