import React, {useState} from 'react';
import styled from "styled-components";
import {IColorThemeProps} from "../../../@styled/IColorThemeProps";

interface WorkItemProps {
    backgroundImg: string,
    title: string,
}

function WorkItem({backgroundImg, title}: WorkItemProps) {

    const [imgScale, setImgScale] = useState(1.0);
    const [fadeScreenOpacity, setFadeScreenOpacity] = useState(0);
    const [itemTitleOpacity, setItemTitleOpacity] = useState(0);

    const onMouseOver = () => {
        setImgScale(1.6);
        setFadeScreenOpacity(0.9);
        setItemTitleOpacity(1.0);
    }

    const onMouseLeave = () => {
        setImgScale(1.0);
        setFadeScreenOpacity(0);
        setItemTitleOpacity(0);
    }

    return (
        <Container>
            <StyledItem onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} transformScale={imgScale}
                        backgroundImg={backgroundImg}/>
            <StyledItemFadeScreen onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} opacity={fadeScreenOpacity}/>
            <StyledItemTitle opacity={itemTitleOpacity}>{title}</StyledItemTitle>
        </Container>
    );
}

export default WorkItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  width: 350px;
  height: 350px;
  position: relative;

  margin: 20px 20px;
`;

interface StyledItemProps {
    theme: IColorThemeProps,
    transformScale: number,
    backgroundImg: string,
}

const StyledItem = styled.div<StyledItemProps>`

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: 0.4s;

  background-image: url('${props => props.backgroundImg}');
  background-repeat: no-repeat;
  background-size: contain;

  transform: scale(${props => props.transformScale});
`;

interface StyledItemFadeScreenProps {
    theme: IColorThemeProps,
    opacity: number,
}

const StyledItemFadeScreen = styled.div<StyledItemFadeScreenProps>`

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: 0.4s;

  background-color: #352793;

  opacity: ${props => props.opacity};
`;

interface StyledItemTitleProps {
    theme: IColorThemeProps,
    opacity: number,
}

const StyledItemTitle = styled.div<StyledItemTitleProps>`
  color: ${props => props.theme.textIconsColor};

  z-index: 2;
  font-size: 30px;

  padding-bottom: 35px;

  opacity: ${props => props.opacity};
`;