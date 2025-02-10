import styled from 'styled-components';
import photo from '../../../assets/img/main-avatar.jpeg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <BoxMainTitle>
                    <MainTitle>I’m Alea. I will create a web design that can give value to your company</MainTitle>
                </BoxMainTitle>
                <FlexWrapper $align={"center"} $justify={"center"} $gap={"15px"}>
                    <button>
                        <span>UI/UX Designer</span>
                        <span>4 Years</span>
                    </button>
                    <Photo src={photo} alt="" />
                    <button>
                        <span>Web Developer</span>
                        <span>2 Years</span>
                    </button>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    padding: 80px 0 45px;
`
const BoxMainTitle = styled.div`
    max-width: 1085px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
`
const MainTitle = styled.h1`
    font-size: 50px;
`

const Photo = styled.img`
    width: 393px;
    height: 600px;
    object-fit: cover;
    border-radius: 200px;
` 