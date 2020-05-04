import React from "react";
import moment from "moment";
import { fireEvent, render } from "@testing-library/react";

import { Month } from "./";
import { setToday } from "../../testUtils";

describe("<Month /> should", () => {
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
  const displayValue = "Jan";
  const expectedValue = date.toISOString();

  it("match snapshot", () => {
    const { asFragment } = render(<Month {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("have correct display value for default date", () => {
    const { getByTestId } = render(<Month {...props} />);
    const month = getByTestId("month");

    expect(month).toHaveTextContent(displayValue);
  });
  it("have selected class when selected", () => {
    const { getByTestId, rerender } = render(<Month {...props} />);
    const day = getByTestId("month");

    expect(day).not.toHaveClass("selected");

    rerender(<Month {...props} selected={true} />);
    expect(day).toHaveClass("selected");
  });
  it("fire onClick with proper value when clicked", () => {
    const { getByTestId } = render(<Month {...props} />);
    const month = getByTestId("month");

    expect(month).toHaveValue(expectedValue);

    fireEvent.click(month);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(value).toBe(expectedValue);
  });
});
