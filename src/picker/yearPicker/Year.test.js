import React from "react";
import moment from "moment";
import { fireEvent, render } from "@testing-library/react";

import { setToday } from "../../testUtils";
import { Year } from "./Year";

describe("<Year /> should", () => {
  setToday();

  //default props
  const date = moment();

  let value = null;
  const onClick = jest.fn((e) => (value = e.target.value));
  const props = {
    date,
    selected: false,
    onClick,
  };
  const displayValue = "2020";
  const expectedValue = date.toISOString();

  it("match snapshot", () => {
    const { asFragment } = render(<Year {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("have selected class when selected", () => {
    const { getByTestId, rerender } = render(<Year {...props} />);
    const year = getByTestId("year");

    expect(year).not.toHaveClass("selected");

    rerender(<Year {...props} selected={true} />);
    expect(year).toHaveClass("selected");
  });
  it("fire onClick with proper value when clicked", () => {
    const { getByTestId } = render(<Year {...props} />);
    const year = getByTestId("year");

    expect(year).toHaveValue(expectedValue);

    fireEvent.click(year);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(value).toBe(expectedValue);
  });
});
