import React from "react";
import MockDate from "mockdate";
import moment from "moment";
import { render, fireEvent } from "@testing-library/react";

import { Picker, PickerProps } from "../../picker/Picker";

describe("<Picker /> should", () => {
  let props: PickerProps;

  beforeEach(() => {
    MockDate.set("2020-01-01");
    props = {
      date: moment(),
      locale: "en",
      firstDayOfWeek: 0,
      pickerRef: null,
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

  it("switch between picker views using view switcher and date buttons", () => {
    const { getByTestId, getAllByTestId } = render(<Picker {...props} />);
    const viewSwitch = getByTestId("view-switch");

    expect(getByTestId("day-picker")).toBeInTheDocument();

    //day -> month
    fireEvent.click(viewSwitch);
    expect(getByTestId("month-picker")).toBeInTheDocument();

    //month -> year
    fireEvent.click(viewSwitch);
    expect(getByTestId("year-picker")).toBeInTheDocument();

    //year -> month
    fireEvent.click(getAllByTestId("year")[0]);
    expect(getByTestId("month-picker")).toBeInTheDocument();

    //month -> day
    fireEvent.click(getAllByTestId("month")[0]);
    expect(getByTestId("day-picker")).toBeInTheDocument();
  });

  describe("switch ranges", () => {
    it("within day view", () => {
      const { getAllByTestId } = render(<Picker {...props} />);
      const rangeSwitches = getAllByTestId("range-switch");
      const days = getAllByTestId("day");

      expect(days[0]).toHaveValue("2019-12-28T23:00:00.000Z");

      fireEvent.click(rangeSwitches[0]);

      expect(days[0]).toHaveValue();

    });
    it("within month view", () => {

    });
    it("within year view", () => {

    })
  })
});
