import styled from "styled-components";

export const Reviews = () => {
    return (
        <ReviewsSection>
            <ReviewsContent>
                <ReviewsTitle> John Wick</ReviewsTitle>
                <ReviewsSubTitle>Manager</ReviewsSubTitle>
                <ReviewsText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquen
                </ReviewsText>
            </ReviewsContent>
        </ReviewsSection>
    );
};

const ReviewsSection = styled.section`
    padding: 100px 0;
    background-color: #181E41;
`;

const ReviewsContent = styled.div`
    margin: 0 auto;
    max-width: 793px;
    width: 100%;
`;

const ReviewsTitle = styled.p`
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    margin: 0 0 10px;
    color: #fff;
    text-align: center;
`;

const ReviewsSubTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin: 0 0 20px;
    color: #fff;
    text-align: center;
`;

const ReviewsText = styled.p`
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: #fff;
`;