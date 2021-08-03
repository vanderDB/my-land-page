import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import {IColorThemeProps} from "../@styled/IColorThemeProps";

function AppealToContact() {
    return (
        <Container>
            <StyledTitle>
                Let's work together
            </StyledTitle>
            <StyledDescription>
                Scaling-up your business is our mission!
            </StyledDescription>

            <NavLink to={'/contact'}>
                <StyledContactBtn>
                    Contact
                </StyledContactBtn>
            </NavLink>

        </Container>
    );
}

export default AppealToContact;

const Container = styled.div<IColorThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.darkPrimaryColor};

  padding: 50px 0px;
  
  a {
    width: 50%;
    text-decoration: none!important;
    color: ${props => props.theme.primaryTextColor};
  }
`;

const StyledTitle = styled.div`
  font-size: 100px;
  font-weight: bold;
`;

const StyledDescription = styled.div`
  font-size: 1.25rem;
  margin: 30px 0px;
`;

const StyledContactBtn = styled.div<IColorThemeProps>`
  background-color: ${props => props.theme.accentColor};

  border: ${props => props.theme.accentColor} 1px solid;
  border-radius: 5px;

  height: 50px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;  
  

  display: flex;
  align-items: center;
  justify-content: center;
`;