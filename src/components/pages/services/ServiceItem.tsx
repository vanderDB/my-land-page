import React from 'react';
import styled from "styled-components";


interface Props {
    icon: string,
    title: string,
    description: string,
}

function ServiceItem({icon, title, description}: Props) {
    return (
        <StyledServiceBox>
            <StyledServiceImageContainer>
                <img src={icon}/>
            </StyledServiceImageContainer>
            <StyledServiceTitleContainer>{title}</StyledServiceTitleContainer>
            <StyledServiceDescriptionContainer>{description}</StyledServiceDescriptionContainer>
        </StyledServiceBox>
    );
}

export default ServiceItem;

const StyledServiceBox = styled.div`
  position: relative;
  width: 420px;

  margin: 0 50px;
`;

const StyledServiceImageContainer = styled.div`
  position: absolute;
  left: -90px;

  width: 80px;

  img {
    width: 100%;
    height: auto;
  }
`;


const StyledServiceTitleContainer = styled.div`
  text-align: center;
  font-size: 25px;
`;

const StyledServiceDescriptionContainer = styled.div`
  font-size: 20px;
`;