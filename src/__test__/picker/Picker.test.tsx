import React, { Ref, useRef } from "react";
import MockDate from "mockdate";
import moment from "moment";
import { render } from "@testing-library/react";

import { Picker, PickerProps } from "../../picker/Picker";

xdescribe("<Picker /> should", () => {
  let props: PickerProps;
  let pickerRef: Ref<HTMLDivElement>;

  beforeEach(() => {
    MockDate.set("2020-01-01");
    pickerRef = jest.spyOn(React, "useRef").mockReturnValueOnce(null);
    props = {
      date: moment(),
      locale: "en",
      firstDayOfWeek: 0,
      pickerRef,
      onPick: jest.fn(),
    };
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("match snapshot", () => {
    const { asFragment } = render(<Picker {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
