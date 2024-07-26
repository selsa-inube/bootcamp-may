import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7px;
`;

const StyledImg = styled.img`
    border-radius: 50%;
    height: 29px;
    object-fit: contain;
    padding: 4px;
    width: 29px;
`;

const StyledContainerName = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 5px;
    justify-content: ${ ({ $sender }) => $sender ? 'flex-end' : 'flex-start'};
    
`;

const StyledName = styled.p`
    align-content: center;
    color: #000;
    font-size: 16px;
    font-weight: 450;
`;

const StyledTime = styled.p`
    color: #999292;
    font-size: 13px;
    font-weight: 400;
    margin-top: 7px;
    text-align: ${ ({ $sender }) => $sender ? 'right' : 'left'};
`;

export {
    StyledContainer,
    StyledImg,
    StyledContainerName,
    StyledName,
    StyledTime,
};