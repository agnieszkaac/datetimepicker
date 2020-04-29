import React from "react";
import moment from "moment";
import { render, fireEvent } from "@testing-library/react";

import { Day } from "./";
import { setDate } from "../../testUtils";

const today = "2020-01-01";
setDate(today);

let value = null;
const onClick = jest.fn((e) => (value = e.target.value));
const date = moment();
const props = {
  date,
  selected: false,
  className: "test",
  onClick,
};

describe("<Day /> should", () => {
  describe("match snapshot for present day", () => {
    it("and NOT selected", () => {
      const { container } = render(<Day {...props} />);
      expect(container).toMatchSnapshot();
    });
    it("and selected", () => {
      const { container } = render(<Day {...props} selected={true} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe("match snapshot for NOT present day", () => {
    const nextDay = moment().add(1, "day");
    it("and NOT selected", () => {
      const { container } = render(<Day {...props} date={nextDay} />);
      expect(container).toMatchSnapshot();
    });
    it("and selected", () => {
      const { container } = render(
        <Day {...props} date={nextDay} selected={true} />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  it("fire onClick with proper value when clicked", () => {
    const { container } = render(<Day {...props} />);
    const button = container.querySelector(".day");
    const expectedValue = date.toISOString();

    expect(button).toHaveValue(expectedValue);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(value).toBe(expectedValue);
  });
});
