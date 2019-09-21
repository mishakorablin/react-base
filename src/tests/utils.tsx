import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'emotion-theming';

import { client } from '/data/client';
import { theme } from '/theme';

const AllTheProviders: React.FC = (props) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </ApolloProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
