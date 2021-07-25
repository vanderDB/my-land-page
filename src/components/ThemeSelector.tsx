import React from 'react';
import styled from 'styled-components';
import {brownTheme, IColorTheme, orangeTheme} from "../@styled/Themes";
import {IColorThemeProps} from "../@styled/IColorThemeProps";
import {useDispatch} from "react-redux";
import {applyTheme} from "../@redux/ColorThemeSlice";

const ThemeSelector = () => {

    const dispatch = useDispatch();

    const changeTheme = (theme: IColorTheme) => {
        dispatch(applyTheme(theme));
    }

    return (
        <StyledThemeSelectPanel>
            <StyledThemeSelectBtn theme={orangeTheme} onClick={() => changeTheme(orangeTheme)}></StyledThemeSelectBtn>
            <StyledThemeSelectBtn theme={brownTheme} onClick={() => changeTheme(brownTheme)}></StyledThemeSelectBtn>
        </StyledThemeSelectPanel>
    );
}

export default ThemeSelector;

const StyledThemeSelectPanel = styled.div<IColorThemeProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  border: ${(props) => props.theme.textPrimaryColor} solid 1px;
  border-radius: 5px;
  max-width: 70px;
`;

const StyledThemeSelectBtn = styled.button<IColorThemeProps>`
  color: ${(props) => props.theme.textPrimaryColor};
  background-color: ${(props) => props.theme.accentColor};
  box-shadow: none;
  border: 0px;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin: 5px;
  cursor: pointer;
`;