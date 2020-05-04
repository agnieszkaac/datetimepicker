import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import { WeekDays } from "./";
import "../../testUtils";
import { setDate } from "../../testUtils";

describe("<WeekDays /> should", () => {
  const today = "2020-01-01";
  setDate(today);
  const date = moment();

  it("match snapshot", () => {
    const { asFragment } = render(<WeekDays date={date} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("change week day language when changed locale", () => {
    const { getByText, rerender } = render(<WeekDays date={date} />);
    const mon = getByText("Mon");

    expect(mon).toBeInTheDocument();

    date.locale("pl");
    rerender(<WeekDays date={date} />);
    const pon = getByText("pon");

    expect(pon).toBeInTheDocument();
  });
});
