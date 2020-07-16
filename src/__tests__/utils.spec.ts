import moment, { Moment } from "moment";
import MockDate from "mockdate";

import { parseValueToMoment } from "../utils";

describe("utils.ts", () => {
  beforeEach(() => {
    MockDate.set("2020-01-01");
  });

  afterEach(() => {
    MockDate.reset();
  });

  describe("parseValueToMoment()", () => {
    it("should return Moment value when Moment input value provided", () => {
      const value = moment();
      expect(parseValueToMoment(value) instanceof moment).toBeTruthy();
      expect(parseValueToMoment(value).format("2020-01-01")).toEqual(
        "2020-01-01",
      );
    });

    it("should return Moment value when Date input value provided", () => {
      const value = new Date();
      expect(parseValueToMoment(value) instanceof moment).toBeTruthy();
      expect(parseValueToMoment(value).format("2020-01-01")).toEqual(
        "2020-01-01",
      );
    });

    it("should return Moment value when string input value provided", () => {
      const value = "2020-01-01";
      expect(parseValueToMoment(value) instanceof moment).toBeTruthy();
      expect(parseValueToMoment(value).format("2020-01-01")).toEqual(
        "2020-01-01",
      );
    });
  });
});
