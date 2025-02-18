import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../assets/styles/Theme.ts";
import {Button} from "../../../components/button/Button.tsx";

export const Contact = () => {
    return (
        <ContactSection>
            <Container>
                <ContactTitle>
                    Send me a <span>message</span>, I will be touch with you shortly.
                </ContactTitle>
                <ContactForm>
                    <Field placeholder={"Your name"}/>
                    <Field placeholder={"Your Subject"}/>
                    <Field placeholder={"Your message"} as={"textarea"} />
                    <Field placeholder={"Enter Your Email Adress"}/>
                    <Button textButton={"Send message"} />
                </ContactForm>
            </Container>
        </ContactSection>
    );
};

const ContactSection = styled.section`
    padding: 100px 0;
    background-color: #000;
    color: #fff;

    span {
        color: ${theme.colors.accentFont};
    }
`;

const ContactTitle = styled.h3`
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
    margin: 0 auto 50px;
    color: #fff;
    text-align: center;
    max-width: 1000px;
    width: 100%;
`;

const ContactForm = styled.form`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 24px;
    margin: 0 auto;
`;

const Field = styled.input`
    font-size: 20px;
    line-height: 24px;
    padding: 10px 0;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #FFFFFF80;
    transition: .2s ease-in-out;
    resize: none;
    
    &::placeholder {
        transition: .2s ease-in-out;
    }
    
    &:hover,
    &:focus {
        border-bottom: 2px solid #fff;
        
        &::placeholder {
            color: #fff;
        }
    }
`;
