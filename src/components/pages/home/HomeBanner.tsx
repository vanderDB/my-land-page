import {HomeBannerImg} from "../../../assets/img";
import React from 'react';
import styled from "styled-components";


function HomeBanner() {
    return (
        <StyledBannerContainer>
            <StyledHomeBannerTitle>
                We help your business grow
            </StyledHomeBannerTitle>
            <StyledImageContainer>
                <img src={HomeBannerImg}/>
            </StyledImageContainer>
        </StyledBannerContainer>
    );
}

export default HomeBanner;

const StyledBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

const StyledHomeBannerTitle = styled.div`
  font-size: 40px;
  font-weight: bold;

  max-width: 350px;
  margin-right: 10px;
`;

const StyledImageContainer = styled.div`
  width: 500px;

  img {
    width: 100%;
  }
`;