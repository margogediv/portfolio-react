
import styled from 'styled-components';
import {theme} from "../../assets/styles/Theme.ts";
import {Button} from "../../components/button/Button.tsx";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            {props.menuItems.map((item, index) => {
                return <ListItem key={index}>
                    <Link href="">{item}</Link>
                </ListItem>
            })}
            <Button textButton={'Let’s Talk'} />
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: center;
`

const ListItem = styled.li`
    transition: .2s linear;
`

const Link = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    transition: .2s linear;

    &:hover,
    &:focus {
        color: ${theme.colors.accentFont};
    }
`