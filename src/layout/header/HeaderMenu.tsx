
import styled from 'styled-components';
import {theme} from "../../assets/styles/Theme.ts";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
        justify-content: center;
    }
`

const ListItem = styled.li`
    transition: .2s linear;
`

const Link = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    transition: .2s linear;

    &:hover {
        color: ${theme.colors.accentFont};
    }
`