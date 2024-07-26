import styled from "styled-components";

const StyledContainer = styled.div`
    border: 1px solid #ccc;
    padding: 15px;
    text-align: center;
    border-radius: 10px;
    margin: 10px 14px;
    
`;

const StyledTitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin: 8px 1px;
    text-align: left;
`;

const StyledSpan = styled.span`
    color: #07ff9d;
`;

const StyledDescr = styled.p`
    font-size: 14px;
    margin: 8px 1px;
    color: #6a6b77;
    text-align: left;
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #8f47ff;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 1px;
    font-size: 15px;
    width: 100%;

`;

export {
    StyledContainer,
    StyledTitle,
    StyledSpan,
    StyledDescr,
    StyledButton,
};