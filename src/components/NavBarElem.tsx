import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {IColorThemeProps} from "../@styled/IColorThemeProps";

interface Props {
    label: string;
    path: string;
}

export function NavBarElem({label, path}: Props) {

    return (
        <StyledNavBarLink>
            <NavLink to={`/${path}`} activeClassName="selected">{label}</NavLink>
        </StyledNavBarLink>
    );
}

const StyledNavBarLink = styled.div<IColorThemeProps>`
  > a {
    color: ${(props) => props.theme.primaryTextColor};
    text-decoration: none;
  }

  > a.selected {
    border-bottom: 2px solid ${(props) => props.theme.accentColor};
  }

  margin: 0px 15px;

}
`;