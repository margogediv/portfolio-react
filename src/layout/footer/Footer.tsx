import styled from 'styled-components';
import {Container} from "../../components/Container.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterList>
                    <FooterItem>
                        <FooterLink>
                            <Icon iconId={"dribble"} width={'24'} height={'24'} viewBox={"0 0 24 24"}/>
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink>
                            <Icon iconId={"gitHub"} width={'24'} height={'24'} viewBox={"0 0 24 24"}/>
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink>
                            <Icon iconId={"linkedin"} width={'24'} height={'24'} viewBox={"0 0 24 24"}/>
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink>
                            <Icon iconId={"upwork"} width={'24'} height={'24'} viewBox={"0 0 24 24"}/>
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink>
                            <Icon iconId={"youTube"} width={'24'} height={'24'} viewBox={"0 0 24 24"}/>
                        </FooterLink>
                    </FooterItem>
                </FooterList>
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

const FooterList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: 0 0 24px;
`

const FooterItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.25);
`

const FooterLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
`