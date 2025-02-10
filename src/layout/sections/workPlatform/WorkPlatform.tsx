import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import {Container} from "../../../components/Container.tsx";

export const WorkPlatform = () => {
    return (
        <StyledPlatform>
            <Container>
                <FlexWrapper $justify={"space-between"} $align={"center"}>
                    <Icon iconId={'dribbleFull'} width='122' height='30' viewBox='0 0 122 30'/>
                    <Icon iconId={'linkedinFull'} width='122' height='30' viewBox='0 0 122 30'/>
                    <Icon iconId={'medium'} width='152' height='30' viewBox='0 0 152 30'/>
                    <Icon iconId={ 'behance' } width='161' height='30' viewBox='0 0 161 30'/>
                </FlexWrapper>
            </Container>
        </StyledPlatform>
    );
};

const StyledPlatform = styled.section`
    background-color: #181E41;
    padding: 55px 15px 50px;

`