import styled from "styled-components";
import {IColorThemeProps} from "../@styled/IColorThemeProps";

export function Header(props: any) {
    return (
        <StyledHeader>
            Header
        </StyledHeader>
    );
}

const StyledHeader = styled.div<IColorThemeProps>`
    background-color: ${props => props.theme.backgroundColor};
`;