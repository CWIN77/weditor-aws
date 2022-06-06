import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  a { cursor: pointer; text-decoration: none; }
  body{
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1d2127;
  }
  body::-webkit-scrollbar{
    width:8px;
    background-color: initial;
  }
  body::-webkit-scrollbar-thumb{
    width:8px;
    background-color: #373d4a;
  }
  * {
    /* font-family: "Noto Sans KR", sans-serif; */
    background-color: initial;
    margin: 0px;
    padding: 0px;
    border: none;
    outline: none;
    text-decoration: none;
    font-size: 16px;
    color: black;
    font-weight: 400;
    color: #C8D4E6;
  }
`;
