import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import { YearPicker } from "./";
import { setToday } from "../../testUtils";

describe("<YearPicker /> should", () => {
  setToday();

  //default props
  const onPick = jest.fn((_e) => {});
  const props = {
    viewDate: moment(),
    onPick,
  };
  it("match snapshot", () => {
    const { asFragment } = render(<YearPicker {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("render 12 years in one view", () => {
    const { getAllByTestId } = render(<YearPicker {...props} />);
    const years = getAllByTestId("year");

    expect(years.length).toBe(12);
  });
});
