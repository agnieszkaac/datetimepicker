import React from "react";
import { render } from "@testing-library/react";

import { WeekDays } from "./";
import "../../testUtils";

describe("<WeekDays /> should", () => {
  it("match snapshot", () => {
    const { asFragment } = render(<WeekDays />);
    expect(asFragment()).toMatchSnapshot();
  });
});
