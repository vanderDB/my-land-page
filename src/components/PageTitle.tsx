import React from 'react';
import styled from "styled-components";
import {IColorThemeProps} from "../@styled/IColorThemeProps";

interface Props {
    title: string,
}

PageTitle.defaultProps = {
    title: 'Title',
}

function PageTitle({title}: Props) {
    return (
        <StyledPageTitle>
            {title}
        </StyledPageTitle>
    );
}

export default PageTitle;


const StyledPageTitle = styled.div<IColorThemeProps>`
  font-size: 100px;
  line-height: 105px;
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.primaryTextColor};
`;