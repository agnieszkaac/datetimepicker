import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";
import { render } from "@testing-library/react";

import { WeekDays, WeekDaysProps } from "../../picker/dayPicker";

describe("<WeekDays /> should", () => {
  let viewDate: Moment;
  let props: WeekDaysProps;

  beforeEach(() => {
    MockDate.set("2020-01-01");

    viewDate = moment();
    props = {
      viewDate,
    };
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("match snapshot", () => {
    const { asFragment } = render(<WeekDays {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("render 7 week day names", () => {
    const { getAllByTestId } = render(<WeekDays {...props} />);
    const days = getAllByTestId("week-day");

    expect(days.length).toEqual(7);
  });

  it("change week day language when changed locale", () => {
    const { getByText, rerender } = render(<WeekDays {...props} />);
    const mon = getByText("Mon");

    expect(mon).toBeInTheDocument();

    viewDate.locale("pl");
    rerender(<WeekDays {...props} />);
    const pon = getByText("pon");

    expect(pon).toBeInTheDocument();
  });
});
