import React from "react";

import { noop } from "../utils";
import { PickerProps } from "../types";
import "./Picker.scss";

export const Picker: React.FunctionComponent<PickerProps> = ({
  pickerRef,
  onPick = noop,
}) => (
  <div className={"picker"} onClick={onPick} ref={pickerRef}>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </div>
);
