import React from "react";
import { render, RenderOptions } from "@testing-library/react";

import { DateProvider, ViewProvider } from "../state";
import { Moment } from "moment";
import { View } from "../picker/types";

type AllProvidersProps = {
  view: View;
  date: Moment;
  viewDate: Moment;
};

const AllProviders = (props: AllProvidersProps): React.FC => ({ children }) => {
  return (
    <ViewProvider view={props.view} viewDate={props.viewDate}>
      <DateProvider date={props.date}>{children}</DateProvider>
    </ViewProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options: RenderOptions,
  props: AllProvidersProps,
) => {
  const rendered = render(ui, { wrapper: AllProviders(props), ...options });
  return {
    ...rendered,
    rerender: (
      ui: React.ReactElement,
      options: RenderOptions,
      props: AllProvidersProps,
    ) => customRender(ui, { container: rendered.container, ...options }, props),
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
