import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";
import { render } from "@testing-library/react";

import { Switch, SwitchProps } from "../../picker/switch/Switch";
import { View } from "../../picker/utils";

describe("<Switch /> should", () => {
  let props: SwitchProps;
  let viewDate: Moment;

  beforeEach(() => {
    MockDate.set("2020-01-01");

    viewDate = moment();
    props = {
      view: View.Day,
      viewDate,
      onViewSwitch: jest.fn(),
      onRangeSwitch: jest.fn(),
    };
  });

  it("match snapshot", () => {
    const { asFragment } = render(<Switch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
