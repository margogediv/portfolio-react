import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import {Container} from "../../../components/Container.tsx";

export const About = () => {
    return (
        <AboutSection>
            <Container>
                <FlexWrapper $gap={"79px"}>
                    <AboutTitle>About Me.</AboutTitle>
                    <AboutText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                    </AboutText>
                </FlexWrapper>
                <AboutList>
                    <AboutItem>
                        <AboutItemCount>4K</AboutItemCount>
                        <AboutItemTitle>Projects Done</AboutItemTitle>
                    </AboutItem>
                    <AboutItem>
                        <AboutItemCount>2K</AboutItemCount>
                        <AboutItemTitle>Happy Clients</AboutItemTitle>
                    </AboutItem>
                    <AboutItem>
                        <AboutItemCount>9K</AboutItemCount>
                        <AboutItemTitle>Clients on Worldwide</AboutItemTitle>
                    </AboutItem>
                </AboutList>
            </Container>
        </AboutSection>
    );
};

const AboutSection = styled.section`
    padding: 80px 15px;
    background: linear-gradient(214.02deg, rgba(183, 92, 255, 0.5) 6.04%, rgba(103, 26, 228, 0.5) 92.95%);
`

const AboutTitle = styled.h2`
    font-size: 100px;
    font-weight: 700;
    line-height: 120px;
    color: #fff;
    margin: 0;
`

const AboutText = styled.p`
    font-size: 30px;
    font-weight: 500;
    line-height: 54px;
    color: #fff;
`

const AboutList = styled.ul`
    margin: 50px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
`

const AboutItem = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
`

const AboutItemCount = styled.div`
    border-radius: 30px;
    background: linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%);
    padding: 20px 30px;
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    line-height: 90px;
`

const AboutItemTitle = styled.p`
    max-width: 163px;
    width: 100%;
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
`