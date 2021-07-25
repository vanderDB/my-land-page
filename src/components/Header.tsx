import styled from "styled-components";
import {IColorThemeProps} from "../@styled/IColorThemeProps";
import ThemeSelector from "./ThemeSelector";
import React from "react";
import {NavBar} from "./NavBar";

export function Header() {
    return (
        <StyledHeader>
            <ThemeSelector/>
            <NavBar/>
        </StyledHeader>
    );
}

const StyledHeader = styled.div<IColorThemeProps>`
  display: flex;
  justify-content: space-around;
`;