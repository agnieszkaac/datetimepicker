import React from "react";
import moment from "moment";
import cx from "classnames";

import { YearProps } from "./index";

export const Year: React.FunctionComponent<YearProps> = ({
  date,
  selected,
  onPick,
}) => {
  const isToday = moment(date).isSame(moment(), "year");
  return (
    <button
      type="button"
      value={moment(date).toISOString()}
      className={cx("year", { selected: selected, "is-today": isToday })}
      onClick={onPick}
    >
      {moment(date).format("YYYY")}
    </button>
  );
};
