import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { ViewSwitch, ViewSwitchProps } from "../../picker/switch/ViewSwitch";

describe("<ViewSwitch /> should", () => {
  let props: ViewSwitchProps;
  const onClick = jest.fn();
  props = {
    label: "Test",
    onClick,
  };

  it("match snapshot", () => {
    const { asFragment } = render(<ViewSwitch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("run onClick function only once", () => {
    const { getByTestId } = render(<ViewSwitch {...props} />);
    const button = getByTestId("view-switch");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
