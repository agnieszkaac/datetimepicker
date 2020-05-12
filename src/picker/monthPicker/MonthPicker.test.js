import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import { MonthPicker } from "./index";
import { setToday } from "../../testUtils";

describe("<MonthPicker /> should", () => {
  setToday();

  //default props
  const onPick = jest.fn((_e) => {});
  const props = {
    viewDate: moment(),
    onPick,
  };

  it("match snapshot", () => {
    const { asFragment } = render(<MonthPicker {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("render 12 months", () => {
    const { getAllByTestId } = render(<MonthPicker {...props} />);
    const months = getAllByTestId("month");

    expect(months.length).toBe(12);
  });
});
