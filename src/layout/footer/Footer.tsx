import styled from 'styled-components';
import {Container} from "../../components/Container.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterText>Created by Zarror | All Reserved!</FooterText>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background: #000;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin: 0 auto;
`

const FooterText = styled.p`
    color: #fff;
    margin: 0 auto;
    text-align: center;
`