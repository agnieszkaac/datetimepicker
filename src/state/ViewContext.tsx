import React from "react";
import moment, { Moment } from "moment";
import { View } from "../picker/types";

type ViewContextValue = {
  view: View;
  viewDate: Moment;
};

const defaultContext: ViewContextValue = {
  view: View.Day,
  viewDate: moment(),
};

export const ViewContext = React.createContext<ViewContextValue>(
  defaultContext,
);
ViewContext.displayName = "ViewContext";
