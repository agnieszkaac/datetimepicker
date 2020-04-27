import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";

import { DayPicker } from "./index";
import "../../testUtils";

const onPick = jest.fn((e) => {});

describe("<DayPicker /> should", () => {
  it("match snapshot when no date selected", () => {
    const { container } = render(
      <DayPicker viewDate={moment()} onPick={onPick} />,
    );
    expect(container).toMatchSnapshot();
  });
});
