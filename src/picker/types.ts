import React, { Ref } from "react";
import { Moment } from "moment";

export interface PickerProps {
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

export type PickerComponentProps = {
  onPick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}