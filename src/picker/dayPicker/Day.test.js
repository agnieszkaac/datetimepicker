import React from "react";
import moment from "moment";
import { render, fireEvent } from "@testing-library/react";

import { Day } from "./";
import { setToday } from "../../testUtils";

describe("<Day /> should", () => {
  setToday();

  let value = null;
  const displayValue = "1";

  //default props
  const date = moment();
  const onClick = jest.fn((e) => (value = e.target.value));
  const props = {
    date,
    selected: false,
    className: "test",
    onClick,
  };

  it("match snapshot", () => {
    const { asFragment } = render(<Day {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("have correct display value for default date", () => {
    const { getByTestId } = render(<Day {...props} />);
    const day = getByTestId("day");

    expect(day).toHaveTextContent(displayValue);
  });

  it("have selected class when selected", () => {
    const { getByTestId, rerender } = render(<Day {...props} />);
    const day = getByTestId("day");

    expect(day).not.toHaveClass("selected");

    rerender(<Day {...props} selected={true} />);
    expect(day).toHaveClass("selected");
  });

  it("fire onClick with proper value when clicked", () => {
    const { getByTestId } = render(<Day {...props} />);
    const day = getByTestId("day");
    const expectedValue = date.toISOString();

    expect(day).toHaveValue(expectedValue);

    fireEvent.click(day);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(value).toBe(expectedValue);
  });
});
