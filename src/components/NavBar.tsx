import React from "react";
import styled from "styled-components";
import {NavBarElem} from "./NavBarElem";

export function NavBar() {

    const navigations = [
        {
            id: 1,
            label: 'Home',
            path: 'home',
            sort: 1,
            enabled: true,
        },
        {
            id: 2,
            label: 'Services',
            path: 'services',
            sort: 2,
            enabled: true,
        },
        {
            id: 3,
            label: 'Works',
            path: 'works',
            sort: 3,
            enabled: true,
        },
        {
            id: 4,
            label: 'Team',
            path: 'team',
            sort: 4,
            enabled: true,
        },
        {
            id: 5,
            label: 'Contact',
            path: 'contact',
            sort: 5,
            enabled: true,
        },
    ];

    return (
        <StyledNavBar>
            {navigations.filter(el => el.enabled).sort((a, b) => a.sort > b.sort ? 1 : -1).map(nav => (
                <NavBarElem key={nav.id} label={nav.label} path={nav.path}/>
            ))}
        </StyledNavBar>
    );
}

const StyledNavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;