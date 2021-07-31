import { createGlobalStyle } from 'styled-components';
import {IColorThemeProps} from "./IColorThemeProps";

export const GlobalStyle = createGlobalStyle<IColorThemeProps>`
  body {
    color: ${props=>props.theme.primaryTextColor};
    background-color: ${props=>props.theme.lightPrimaryColor};
  }`;