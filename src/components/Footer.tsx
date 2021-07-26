import styled from "styled-components";

type Props = {

};

export function Footer(props: Props) {
    return (
        <StyledFooter>
            Copyright &copy; 2021
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;