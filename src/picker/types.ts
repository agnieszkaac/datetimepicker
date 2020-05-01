import React, { Ref } from "react";
import { Moment } from "moment";

export interface PickerProps {
  date: Moment | undefined;
  locale: string;
  firstDayOfWeek: number | undefined;
  pickerRef: Ref<HTMLDivElement>;
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export enum View {
  Day,
  Month,
  Year,
}
