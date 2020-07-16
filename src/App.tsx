import React from "react";
import ReactDOM from "react-dom";

import { DatePicker } from "./";
import "./App.scss";
import moment from "moment";

// const date = moment().add(1, "month");
const date = moment();

ReactDOM.render(
  <div className="container">
    <DatePicker
      value={date}
      displayFormat={"DD-MMM-YYYY"}
      locale={"pl"}
      firstDayOfWeek={1}
    />
  </div>,
  document.getElementById("root"),
);
