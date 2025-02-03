import styled from 'styled-components';

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterText>Created by Zarror | All Reserved!</FooterText>
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
`