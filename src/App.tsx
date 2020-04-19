import React from "react";
import ReactDOM from "react-dom";

import { DatePicker } from "./";
import "./App.scss";
import moment from "moment";

const date = undefined;
// const date = moment().add(1, "month");
ReactDOM.render(
  <div className="container">
    <DatePicker value={date} />
  </div>,
  document.getElementById("root"),
);
