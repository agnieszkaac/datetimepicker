import React, { Ref } from "react";

import { MomentDate } from "../types";

export interface PickerProps {
  date: MomentDate;
  pickerRef: Ref<HTMLDivElement>;
  onPick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
