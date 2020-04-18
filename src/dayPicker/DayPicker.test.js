import React from "react";
import { render } from "@testing-library/react";

import { Day } from "./Day";

const onPick = jest.fn();
jest.mock("moment", () => () => ({
  date: () => "1",
}));

describe("Day should", () => {
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
