import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core';
import React from 'react'
import ReactDOM from 'react-dom'

import { client } from '/data/client'

import { App } from '/App'

import { theme } from '/theme'

const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }
`;

const AppBase = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(<AppBase />, document.getElementById('root'))
