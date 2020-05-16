import React from "react";
import MockDate from "mockdate";
import moment, { Moment } from "moment";
import { render } from "@testing-library/react";

import { YearPicker, YearPickerProps } from "../../picker/yearPicker";

describe("<YearPicker /> should", () => {
  let date: Moment | undefined;
  let viewDate: Moment;
  const onPick = jest.fn((_e) => {});
  let props: YearPickerProps;

  beforeEach(() => {
    MockDate.set("2020-01-01");

    date = undefined;
    viewDate = moment();
    props = {
      date,
      viewDate,
      onPick,
    };
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("match snapshot", () => {
    const { asFragment } = render(<YearPicker {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("render 12 years in a grid", () => {
    const { getAllByTestId } = render(<YearPicker {...props} />);
    const years = getAllByTestId("year");

    expect(years.length).toEqual(12);
  });

  it("render selected year when date prop is passed and within viewDate", () => {
    const { getByText, rerender } = render(<YearPicker {...props} />);
    const year = getByText("2022");

    expect(year).not.toHaveClass("selected");

    props.date = moment("2022-01-01");
    rerender(<YearPicker {...props} />);

    expect(year).toHaveClass("selected");
  });

  it("not render selected year when date is not within viewDate", () => {
    props.date = moment();
    props.viewDate = moment("2050-01-01");

    const { queryByText } = render(<YearPicker {...props} />);
    const year = queryByText("2020");

    expect(year).toBeNull();
  });

  it("render current year when within viewDate", () => {
    const { getByText } = render(<YearPicker {...props} />);
    const year = getByText("2020");

    expect(year).toHaveClass("is-today");
  });

  it("not render current year when not within viewDate", () => {
    props.viewDate = moment("2050-01-01");

    const { queryByText } = render(<YearPicker {...props} />);
    const year = queryByText("2020");

    expect(year).toBeNull();
  })
});
