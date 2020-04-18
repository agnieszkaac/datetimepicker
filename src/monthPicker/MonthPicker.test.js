import React from "react";
import { render } from "@testing-library/react";

import { Month, MonthPicker } from "./";

const onPick = jest.fn();
jest.mock("moment", () => (value) => ({
  month: () => "1",
  format: () => "Jan",
}));

describe("<Month/> should", () => {
  it("math snapshot for NOT present month, NOT selected", () => {
    const { container } = render(
      <Month value={"2"} selected={false} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
  it("match snapshot for NOT present month, selected", () => {
    const { container } = render(
      <Month value={"2"} selected={true} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
  it("match snapshot for present month, NOT selected", () => {
    const { container } = render(
      <Month value={"1"} selected={false} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("match snapshot for present month, selected", () => {
    const { container } = render(
      <Month value={"1"} selected={true} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});

describe("<MonthPicker /> should", () => {
  it("match snapshot", () => {
    const { container } = render(<MonthPicker value={"1"} onPick={onPick} />);
    expect(container).toMatchSnapshot();
  });
});
