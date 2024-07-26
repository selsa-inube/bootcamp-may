import styled from "styled-components";

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    background-color: #16172b;
    color : #e2e2e5;
    padding: 25px 5px;
    justify-content: space-evenly;
    height: 100vh;
`;

const StyledPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 5px;
    padding-top: 7px;
`;

const StyledImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid #f5f5f7;
    object-fit: contain;
    padding: 5px;
    background-color: #fedaa8;
`;

const StyledIcon = styled.div`
    background-color: #f5f5f7;
    border-radius: 50%;
    padding: 5px;
    margin-top: -30px;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #16172b;

    &:hover {
        background-color: #e2e2e5;
        cursor: pointer;
    }
`;

const StyledUserName = styled.p`
    font-size: 18px;
    margin: 0;
`;

const StyledStatus = styled.p`
    font-size: 14px;
    margin: 0;
    color: #a0a0a3;
`;

const StyledLine = styled.hr`
    border: 0.5px solid #25263a;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export {
    StyledMainContainer,
    StyledPerfil,
    StyledImg,
    StyledIcon,
    StyledUserName,
    StyledStatus,
    StyledLine,
};