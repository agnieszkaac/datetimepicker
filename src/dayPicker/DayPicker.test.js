import React from "react";
import { render } from "@testing-library/react";

import { Day, DayPicker } from "./";

const onPick = jest.fn();
jest.mock("moment", () => () => ({
  date: () => "1",
  isSame: (value, granularity) => true,
  daysInMonth: () => 30,
  toISOString: () => "",
}));

describe("<Day /> should", () => {
  it("match snapshot for NOT present day, NOT selected", () => {
    const { container } = render(
      <Day value={"2"} selected={false} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("match snapshot for NOT present day, selected", () => {
    const { container } = render(
      <Day value={"2"} selected={true} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("match snapshot for present day, NOT selected", () => {
    const { container } = render(
      <Day value={"1"} selected={false} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("match snapshot for present day, selected", () => {
    const { container } = render(
      <Day value={"1"} selected={true} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});

describe("<DayPicker /> should", () => {
  it("match snapshot", () => {
    const { container } = render(
      <DayPicker value={"1"} monthLength={10} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});
