import styled from "styled-components";
import {IColorThemeProps} from "../../../@styled/IColorThemeProps";

function MessageToClient() {
    return (
        <Container>
            <MessageToClientContainer>
                <MessageToClientTitle>
                    We specialize in telling brand stories
                    along the entire customer journey.
                </MessageToClientTitle>
                <MessageToClientText>
                    Our end-to-end approach helps you define opportunities, bring ideas to life,
                    measure their impact and keep improving them.
                </MessageToClientText>
            </MessageToClientContainer>
        </Container>
    );
}

export default MessageToClient;

const Container = styled.div<IColorThemeProps>`
  margin-top: 50px;
  
  background-color: ${props => props.theme.darkPrimaryColor};

  padding: 3.6rem 21rem;
`;

const MessageToClientContainer = styled.div<IColorThemeProps>`
  padding: 4rem 15rem;
  background-color: ${props => props.theme.defaultPrimaryColor};
`;

const MessageToClientTitle = styled.div<IColorThemeProps>`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`;

const MessageToClientText = styled.div<IColorThemeProps>`
  margin-top: 30px;
  font-size: 1rem;
  text-align: center;
`;

