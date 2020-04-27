import React from "react";
import { render } from "@testing-library/react";

import { WeekDays } from "./WeekDays";
import "../../testUtils";

describe("<WeekDays /> should", () => {
  it("match snapshot", () => {
    const { container } = render(<WeekDays />);
    expect(container).toMatchSnapshot();
  });
});
