import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper $justify={"space-between"} $align={"center"}>
                    <Logo />
                    <Menu />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: linear-gradient(214.02deg, rgba(183, 92, 255, 0.5) 6.04%, rgba(103, 26, 228, 0.5) 92.95%);
    padding: 15px;
`