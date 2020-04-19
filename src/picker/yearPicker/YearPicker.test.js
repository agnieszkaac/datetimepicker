import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import { Year, YearPicker } from "./index";

const onPick = jest.fn();
Date.now = jest.fn(() => Date.parse("2020-01-01"));

describe("<Year/> should", () => {
  describe("match snapshot for present day", () => {
    it("and NOT selected", () => {
      const { container } = render(
        <Year date={moment()} selected={false} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
    it("and selected", () => {
      const { container } = render(
        <Year date={moment()} selected={true} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
  });
  describe("match snapshot for NOT present day", () => {
    it("and NOT selected", () => {
      const { container } = render(
        <Year
          date={moment().add(1, "year")}
          selected={false}
          onPick={onPick}
        />,
      );
      expect(container).toMatchSnapshot();
    });

    it("and selected", () => {
      const { container } = render(
        <Year date={moment().add(1, "year")} selected={true} onPick={onPick} />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});

describe("<YearPicker /> should", () => {
  it("match snapshot", () => {
    const { container } = render(
      <YearPicker date={moment()} viewDate={moment()} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});
