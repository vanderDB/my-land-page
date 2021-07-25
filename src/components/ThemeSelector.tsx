import React from 'react';
import styled from 'styled-components';
import {darkTheme, IColorTheme, lightTheme, partyTheme} from "../@styled/Themes";
import {IColorThemeProps} from "../@styled/IColorThemeProps";
import {useDispatch} from "react-redux";
import {applyTheme} from "../@redux/ColorThemeSlice";


const StyledButton = styled.button<IColorThemeProps>`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 12px;
  cursor: pointer;
`;

const ThemeSelector = () => {

    const dispatch = useDispatch();

    const changeTheme = (theme: IColorTheme) => {
        dispatch(applyTheme(theme));
    }

    return (
        <div>
            <StyledButton onClick={() => changeTheme(darkTheme)}>Dark</StyledButton>
            <StyledButton onClick={() => changeTheme(lightTheme)}>Light</StyledButton>
            <StyledButton onClick={() => changeTheme(partyTheme)}>Party</StyledButton>
        </div>
    );
}

export default ThemeSelector;