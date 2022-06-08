import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import Head from 'next/head';

import {GlobalStyle} from '../src/styles/global-styles';
import "../src/styles/global-font.css"
import {theme} from '../src/styles/theme';
import {Amplify} from 'aws-amplify';
import awsConfigure from "../src/aws-exports"
Amplify.configure(awsConfigure)

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}