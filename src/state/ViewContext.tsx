import React from "react";
import moment, { Moment } from "moment";

import { View } from "../picker/types";

type ViewProviderProps = {
  view: View;
  viewDate: Moment;
};

const defaultContext: ViewProviderProps = {
  view: View.Day,
  viewDate: moment(),
};

export const ViewContext = React.createContext<ViewProviderProps>(
  defaultContext,
);

export const ViewProvider: React.FC<ViewProviderProps> = (props) => {
  const { view, viewDate } = props;
  return (
    <ViewContext.Provider value={{ view, viewDate }}>
      {props.children}
    </ViewContext.Provider>
  );
};
