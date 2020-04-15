import React, { Ref } from "react";

import "./Picker.scss";
import { noop } from "../utils";

interface PickerProps {
  pickerRef: Ref<HTMLDivElement>;
  onPick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

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
