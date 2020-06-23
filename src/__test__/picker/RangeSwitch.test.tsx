import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { RangeSwitch, RangeSwitchProps } from "../../picker/switch/RangeSwitch";

describe("<RangeSwitch /> should", () => {
  let props: RangeSwitchProps;
  const onClick = jest.fn();
  props = {
    value: -1,
    onClick,
  };

  it("match snapshot", () => {
    const { asFragment } = render(<RangeSwitch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("by default render left pointing arrow when value negative", () => {
    const { getByTestId } = render(<RangeSwitch {...props} />);
    const button = getByTestId("range-switch");

    expect(button).toHaveTextContent("❮");
  });
  it("by default render right pointing arrow when value positive", () => {
    const { getByTestId } = render(<RangeSwitch {...props} value={1} />);
    const button = getByTestId("range-switch");

    expect(button).toHaveTextContent("❯");
  });
  it("run onClick function only once", () => {
    const { getByTestId } = render(<RangeSwitch {...props} />);
    const button = getByTestId("range-switch");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
