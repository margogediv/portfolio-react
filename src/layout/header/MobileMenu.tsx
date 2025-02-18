
import styled, { css } from 'styled-components';
import {theme} from "../../assets/styles/Theme.ts";
import {Button} from "../../components/button/Button.tsx";

export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="#">{item}</Link>
                        </ListItem>
                    })}
                </ul>
                <Button textButton={'Let’s Talk'} />
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: center;
    gap: 40px;
    justify-content: center;
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(72, 31, 120, 0.68);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 190px;
    height: 190px;
    background-color: transparent;
    z-index: 100;
    
    & span {
        display: block;
        width: 36px;
        height: 4px;
        background-color: #000;
        position: absolute;
        left: 24px;
        bottom: 40px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgb(255 255 255 / 0%);
        `}
        
        &::before,
        &::after {
            content: '';
            display: block;
            height: 4px;
            background-color: #000;
        }
        
        &::before {
            width: 36px;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                width: 37px;
                transform: translateY(-1px) rotate(-45deg);
            `}
        }

        &::after {
            width: 36px;
            transform: translateY(6px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                width: 37px;
                transform: translateY(-1px) rotate(45deg);
            `}
        }
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

    &:hover,
    &:focus {
        color: ${theme.colors.accentFont};
    }
`