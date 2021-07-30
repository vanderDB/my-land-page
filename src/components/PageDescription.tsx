import React from 'react';
import styled from "styled-components";
import {IColorThemeProps} from "../@styled/IColorThemeProps";

interface Props {
    text: string,
}

PageDescription.defaultProps = {
    text: 'Empty description',
}

function PageDescription({text}: Props) {
    return (
        <StyledPageDescription>
            {text}
        </StyledPageDescription>
    );
}

export default PageDescription;

const StyledPageDescription = styled.div<IColorThemeProps>`
  font-size: 40px;  
  text-align: center;
  color: ${props => props.theme.primaryTextColor};
  
  margin-top: 45px;
`;