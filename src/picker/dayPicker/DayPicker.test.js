import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import { DayPicker } from "./index";

const onPick = jest.fn();
Date.now = jest.fn(() => Date.parse("2020-01-01"));

describe("<DayPicker /> should", () => {
  it("match snapshot", () => {
    const { container } = render(
      <DayPicker date={moment()} viewDate={moment()} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});
