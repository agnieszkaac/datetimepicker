import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import { Month, MonthPicker } from "./index";

const onPick = jest.fn();
Date.now = jest.fn(() => Date.parse("2020-01-01"));

describe("<Month/> should", () => {
  describe("match snapshot for present day", () => {
    it("and NOT selected", () => {
      const { container } = render(
        <Month date={moment()} selected={false} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
    it("and selected", () => {
      const { container } = render(
        <Month date={moment()} selected={true} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
  });
  describe("match snapshot for NOT present day", () => {
    it("and NOT selected", () => {
      const { container } = render(
        <Month
          date={moment().add(1, "month")}
          selected={false}
          onPick={onPick}
        />,
      );
      expect(container).toMatchSnapshot();
    });

    it("and selected", () => {
      const { container } = render(
        <Month
          date={moment().add(1, "month")}
          selected={true}
          onPick={onPick}
        />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});

describe("<MonthPicker /> should", () => {
  it("match snapshot", () => {
    const { container } = render(
      <MonthPicker date={moment()} viewDate={moment()} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});
