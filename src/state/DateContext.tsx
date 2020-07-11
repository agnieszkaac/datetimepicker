import React from "react";
import { Moment } from "moment";

type DateContextValue = {
  date: Moment | undefined;
}

const defaultContext: DateContextValue = {
  date: undefined,
}
export const DateContext = React.createContext<DateContextValue>(defaultContext);