import React from "react";
import { Moment } from "moment";

type DateProviderProps = {
  date: Moment | undefined;
};

const defaultContext: DateProviderProps = {
  date: undefined,
};
export const DateContext = React.createContext<DateProviderProps>(
  defaultContext,
);

export const DateProvider: React.FC<DateProviderProps> = (props) => {
  const { date } = props;
  return (
    <DateContext.Provider value={{ date }}>
      {props.children}
    </DateContext.Provider>
  );
};
