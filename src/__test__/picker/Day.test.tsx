import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";
import { render, fireEvent } from "@testing-library/react";

import { Day, DayProps } from "../../picker/dayPicker";

describe("<Day /> should", () => {
  let value: string;
  const onClick = jest.fn((e) => (value = e.target.value));

  let viewDate: Moment;
  let props: DayProps;

  beforeEach(() => {
    MockDate.set("2020-01-01");

    viewDate = moment();
    props = {
      viewDate,
      onClick,
    };
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("match snapshot", () => {
    const { asFragment } = render(<Day {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays correct value for default date", () => {
    const { getByTestId } = render(<Day {...props} />);
    const day = getByTestId("day");

    expect(day).toHaveTextContent("1");
  });

  it("have passed class names", () => {
    const { getByTestId } = render(<Day {...props} className="test" />);
    const day = getByTestId("day");

    expect(day).toHaveClass("test");
  });

  it("have fire onClick with correct value attribute", () => {
    const { getByTestId } = render(<Day {...props} />);
    const day = getByTestId("day");
    const expectedValue = "2020-01-01T00:00:00.000Z";

    expect(day).toHaveValue(expectedValue);

    fireEvent.click(day);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(value).toBe(expectedValue);
  });
});
