import React, { Ref } from "react";

import "./Picker.scss";
import { noop } from "../utils";

interface PickerProps {
  pickerRef: Ref<HTMLDivElement>;
  onPick?: Function;
}

export const Picker: React.FunctionComponent<PickerProps> = ({
  pickerRef,
  onPick = noop,
}) => {
  const handleClick = () => {
    onPick();
  };
  return (
    <div className={"picker"} onClick={handleClick} ref={pickerRef}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  );
};
