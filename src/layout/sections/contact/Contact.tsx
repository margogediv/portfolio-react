import styled from "styled-components";

export const Contact = () => {
    return (
        <ContactSection>
            <ContactTitle>
                Send me a message, I will be touch with you shortly.
            </ContactTitle>
            <ContactForm>form</ContactForm>
        </ContactSection>
    );
};

const ContactSection = styled.section`
    padding: 100px 0;
    background-color: #000;
    color: #fff;
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

const ContactForm = styled.div`
    text-align: center;
`;