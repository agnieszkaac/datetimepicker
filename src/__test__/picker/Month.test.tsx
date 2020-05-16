import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";
import { fireEvent, render } from "@testing-library/react";

import { Month, MonthProps } from "../../picker/monthPicker";

describe("<Month /> should", () => {
  let value: string;
  const onClick = jest.fn((e) => (value = e.target.value));

  let viewDate: Moment;
  let props: MonthProps;

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
    const { asFragment } = render(<Month {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays correct value for default date", () => {
    const { getByTestId } = render(<Month {...props} />);
    const month = getByTestId("month");

    expect(month).toHaveTextContent("Jan");
  });

  it("render classNames passed into the component", () => {
    const { getByTestId } = render(<Month {...props} className="test" />);
    const month = getByTestId("month");

    expect(month).toHaveClass("test");
  });

  it("fire onClick with correct value when clicked", () => {
    const { getByTestId } = render(<Month {...props} />);
    const month = getByTestId("month");
    const expectedValue = "2020-01-01T00:00:00.000Z";

    expect(month).toHaveValue(expectedValue);

    fireEvent.click(month);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(value).toBe(expectedValue);
  });
});
