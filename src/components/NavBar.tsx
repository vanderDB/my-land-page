import React from "react";
import styled from "styled-components";
import {NavBarElem} from "./NavBarElem";

export function NavBar() {


    return (
        <StyledNavBar>
            <NavBarElem label='Home' path='home'/>
            <NavBarElem label='Services' path='services'/>
            <NavBarElem label='Works' path='works'/>
            <NavBarElem label='Team' path='team'/>
            <NavBarElem label='Contact' path='contact'/>
        </StyledNavBar>
    );
}

const StyledNavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;