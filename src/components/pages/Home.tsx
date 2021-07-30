import {HomeBanner} from "../../assets/img";
import styled from "styled-components";

export function Home() {
    return (
        <div>
            <StyledBannerContainer>
                <StyledHomeBannerTitle>
                    We help your business grow
                </StyledHomeBannerTitle>
                <StyledImageContainer>
                    <img src={HomeBanner}/>
                </StyledImageContainer>
            </StyledBannerContainer>
        </div>
    );
};

const StyledBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

const StyledHomeBannerTitle = styled.div`  
  font-size: 40px;

  max-width: 350px;
  margin-right: 10px;
`;

const StyledImageContainer = styled.div`
  width: 500px;
  
  img {
    width: 100%;
  }
`;