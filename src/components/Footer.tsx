import styled from "styled-components";
import {IColorThemeProps} from "../@styled/IColorThemeProps";

export function Footer() {
    return (
        <StyledFooter>
            Copyright &copy; 2021
        </StyledFooter>
    );
};

const StyledFooter = styled.div<IColorThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.darkPrimaryColor};
  
  min-height: 70px;
`;