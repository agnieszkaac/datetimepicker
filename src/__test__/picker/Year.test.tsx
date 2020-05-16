import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";
import { fireEvent, render } from "@testing-library/react";

import { Year, YearProps } from "../../picker/yearPicker";

describe("<Year /> should", () => {
  let value: string;
  const onClick = jest.fn((e) => (value = e.target.value));

  let viewDate: Moment;
  let props: YearProps;

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
    const { asFragment } = render(<Year {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("display correct value for default date", () => {
    const { getByTestId } = render(<Year {...props} />);
    const year = getByTestId("year");

    expect(year).toHaveTextContent("2020");
  });

  it("pass class names", () => {
    const { getByTestId } = render(<Year {...props} className="test" />);
    const year = getByTestId("year");

    expect(year).toHaveClass("test");
  });

  it("fire onClick with proper value when clicked", () => {
    const { getByTestId } = render(<Year {...props} />);
    const year = getByTestId("year");
    const expectedValue = "2020-01-01T00:00:00.000Z";

    expect(year).toHaveValue(expectedValue);

    fireEvent.click(year);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(value).toBe(expectedValue);
  });
});
