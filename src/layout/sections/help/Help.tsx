import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container.tsx";

export const Help = () => {
    return (
        <HelpSection>
            <Container>
                <FlexWrapper $gap={"145px"}>
                    <HelpList>
                        <HelpItem>
                            <HelpListTitle>Web Design</HelpListTitle>
                            <HelpListSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HelpListSubTitle>
                        </HelpItem>
                        <HelpItem>
                            <HelpListTitle>UI/UX Design</HelpListTitle>
                            <HelpListSubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HelpListSubTitle>
                        </HelpItem>
                    </HelpList>
                    <div>
                        <HelpTitle>What I Can Do To Help Build Your Product</HelpTitle>
                        <HelpSubTitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </HelpSubTitle>
                        <div>
                            <div>user</div>
                            <FlexWrapper $gap={"60px"}>
                                <div>
                                    <HelpProgressCount>+52.5%</HelpProgressCount>
                                    <HelpProgressTitle>Task finished</HelpProgressTitle>
                                </div>
                                <div>
                                    <HelpProgressCount>+67.5%</HelpProgressCount>
                                    <HelpProgressTitle>Progress speed</HelpProgressTitle>
                                </div>
                            </FlexWrapper>
                        </div>
                    </div>
                </FlexWrapper>
            </Container>
        </HelpSection>
    );
};

const HelpSection = styled.section`
    padding: 100px 15px;
`

const HelpList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 15px;
`

const HelpItem = styled.li`
    padding: 100px 21px;
    background: linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%);
    border-radius: 30px;
    color: #fff;
`

const HelpListTitle = styled.p`
    margin: 0 0 10px;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    color: #fff;
    text-align: center;
`
const HelpListSubTitle = styled.p`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: #fff;
    text-align: center;
`

const HelpTitle = styled.h4`
    margin: 0 0 10px;
    font-size: 40px;
    font-weight: 600;
    line-height: 50px;
`
const HelpSubTitle = styled.p`
    margin: 0 0 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    color: rgba(0, 0, 0, 0.5);
`

const HelpProgressCount = styled.p`
    margin: 0 0 5px;
    font-size: 36px;
    font-weight: 600;
    line-height: 65px;
    color: #000000;
    text-align: center;
`
const HelpProgressTitle = styled.p`
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    line-height: 14px;
    color: #747578;
    text-align: center;
`