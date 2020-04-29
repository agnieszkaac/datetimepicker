import React from "react";
import ReactDOM from "react-dom";

import { DatePicker } from "./";
import "./App.scss";
import moment from "moment";

// const date = moment().add(1, "month");
const date = moment();

// moment.locale("pl");
ReactDOM.render(
  <div className="container">
    <DatePicker value={date} displayFormat={"DD-MMM-YYYY"} />
  </div>,
  document.getElementById("root"),
);
