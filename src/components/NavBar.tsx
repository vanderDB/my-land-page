import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {IColorThemeProps} from "../@styled/IColorThemeProps";

export function NavBar() {
    return (
        <StyledNavBar>
            <StyledNavBarLink>
                <Link to="/home">Home</Link>
            </StyledNavBarLink>
            <StyledNavBarLink>
                <Link to="/services">Services</Link>
            </StyledNavBarLink>
            <StyledNavBarLink>
                <Link to="/works">Works</Link>
            </StyledNavBarLink>
            <StyledNavBarLink>
                <Link to="/team">Team</Link>
            </StyledNavBarLink>
            <StyledNavBarLink>
                <Link to="/contact">Contact</Link>
            </StyledNavBarLink>
        </StyledNavBar>
    );
}

const StyledNavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledNavBarLink = styled.div<IColorThemeProps>`
  > a {
    color: ${(props) => props.theme.primaryTextColor};
    text-decoration: none;
  }

  margin: 0px 15px;
`;