import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: linear-gradient(214.02deg, rgba(183, 92, 255, 0.5) 6.04%, rgba(103, 26, 228, 0.5) 92.95%);
    display: flex;
    justify-content: space-between;
    padding: 15px;
`