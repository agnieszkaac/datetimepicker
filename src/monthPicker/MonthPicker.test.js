import React from "react";
import { render } from "@testing-library/react";

import { Month, MonthPicker } from "./";
import moment from "moment";

const onPick = jest.fn();
jest.mock("moment", () => (value) => ({
  month: (i) => "1",
  format: () => "Jan",
  isSame: (value, granularity) => true,
  toISOString: () => "",
}));

describe("<Month/> should", () => {
  it("math snapshot for NOT present month, NOT selected", () => {
    const { container } = render(
      <Month date={"2"} selected={false} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
  it("match snapshot for NOT present month, selected", () => {
    const { container } = render(
      <Month date={"2"} selected={true} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
  it("match snapshot for present month, NOT selected", () => {
    const { container } = render(
      <Month date={"1"} selected={false} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("match snapshot for present month, selected", () => {
    const { container } = render(
      <Month date={"1"} selected={true} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});

describe("<MonthPicker /> should", () => {
  it("match snapshot", () => {
    const { container } = render(<MonthPicker onPick={onPick} />);
    expect(container).toMatchSnapshot();
  });
});
