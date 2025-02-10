import styled from 'styled-components';
import photo from '../../../assets/img/main-avatar.jpeg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../assets/styles/Theme.ts";
import {Button} from "../../../components/button/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <BoxMainTitle>
                    <MainTitle>I’m <span>Alea</span>. I will create a web design that can give value to your company</MainTitle>
                </BoxMainTitle>
                <FlexWrapper $align={"center"} $justify={"center"} $gap={"15px"}>
                    <Button textButton={'UI/UX Designer'} />
                    <Photo src={photo} alt="" />
                    <Button textButton={'Web Developer'} />
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    padding: 160px 0 45px;
`
const BoxMainTitle = styled.div`
    max-width: 1085px;
    width: 100%;
    text-align: center;
    margin: 0 auto 30px;
`
const MainTitle = styled.h1`
    font-size: 50px;
    
    span {
        color: ${theme.colors.accentFont};
    }
`

const Photo = styled.img`
    width: 393px;
    height: 600px;
    object-fit: cover;
    border-radius: 200px;
` 