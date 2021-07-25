import { createGlobalStyle } from 'styled-components';
import {IColorThemeProps} from "./IColorThemeProps";

export const GlobalStyle = createGlobalStyle<IColorThemeProps>`
  body {
    background-color: ${props=>props.theme.lightPrimaryColor};
  }`;