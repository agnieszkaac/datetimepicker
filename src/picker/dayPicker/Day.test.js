import React from "react";
import moment from "moment";
import { render, fireEvent } from "@testing-library/react";

import { Day } from "./";
import { setDate } from "../../testUtils";

const today = "2020-01-01";
const displayValue = "1";
setDate(today);

let value = null;
const onClick = jest.fn((e) => (value = e.target.value));
const date = moment();
const props = {
  date,
  selected: false,
  className: "test",
  onClick,
};

describe("<Day /> should", () => {
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
    rerender(<Day {...props} selected={true}/>)
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
