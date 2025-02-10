import styled from 'styled-components';
import {theme} from "../../assets/styles/Theme.ts";

type ButtonPropsType = {
    textButton: string
}

export const Button = ({ textButton }: ButtonPropsType) => {
    return (
        <ButtonContainer>
            {textButton}
        </ButtonContainer>
    );
};


const ButtonContainer = styled.button`
    display: inline-block;
    max-width: 288px;
    width: 100%;
    padding: 24px 20px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    color: #fff;
    border-radius: 200px;
    background: ${theme.colors.accentBlock};
`