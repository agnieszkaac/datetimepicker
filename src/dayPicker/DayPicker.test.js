import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import { Day, DayPicker } from "./";

const onPick = jest.fn();
Date.now = jest.fn(() => Date.parse("2020-01-01"));

describe("<Day /> should", () => {
  describe("match snapshot for present day", () => {
    it("and NOT selected", () => {
      const { container } = render(
        <Day date={moment()} selected={false} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
    it("and selected", () => {
      const { container } = render(
        <Day date={moment()} selected={true} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe("match snapshot for NOT present day", () => {
    it("and NOT selected", () => {
      const { container } = render(
        <Day date={moment().add(1, "day")} selected={false} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
    it("and selected", () => {
      const { container } = render(
        <Day date={moment().add(1, "day")} selected={true} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});

describe("<DayPicker /> should", () => {
  it("match snapshot", () => {
    const { container } = render(
      <DayPicker date={moment()} viewDate={moment()} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});
