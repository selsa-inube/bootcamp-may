import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 25px;
`;

const StyledTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 450;
    color: #000;
`;

const StyledSeeAll = styled.p`
    font-size: 1rem;
    color: #8e8686;
    cursor: pointer;    
    &:hover {
        color: #000;
        text-decoration-line: underline;
    }
`;

const StyledContainerPerson = styled.div`
    display: flex;
    flex-direction: column;
`;

export {
    StyledContainer,
    StyledContainerTitle,
    StyledTitle,
    StyledSeeAll,
    StyledContainerPerson,
};