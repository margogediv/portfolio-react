import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./HeaderMenu";

const items =["Main", "WorkPlatform", "About", "Help", "Reviews"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper $justify={"space-between"} $align={"center"}>
                    <Logo />
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: linear-gradient(214.02deg, rgba(183, 92, 255, 0.5) 6.04%, rgba(103, 26, 228, 0.5) 92.95%);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
`