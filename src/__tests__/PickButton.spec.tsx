import React from "react";
import MockDate from "mockdate";
import moment from "moment";
import { render, fireEvent } from "@testing-library/react";

import { PickButton, PickButtonProps } from "../picker/PickButton";

describe("<PickButton />", () => {
  let props: PickButtonProps;
  let value: string;

  const onClick = jest.fn((e) => (value = e.target.value));

  beforeEach(() => {
    MockDate.set("2020-01-01");

    props = {
      date: moment(),
      type: "day",
      format: "D",
      onClick,
    };
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("should render proper button text content based on date and format", () => {
    const { getByRole } = render(<PickButton {...props} />);
    const button = getByRole("button");

    expect(button).toHaveTextContent("1");
  });
  it("should call onClick function with proper value", () => {
    const { getByTestId } = render(<PickButton {...props} />);
    const button = getByTestId("day");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);

    const expectedValue = "Wed Jan 01 2020 01:00:00 GMT+0100";
    expect(value).toBe(expectedValue);
  });
});
