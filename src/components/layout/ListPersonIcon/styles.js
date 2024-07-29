import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    padding-left: 10px;
`;

const StyledImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: ${({color}) => `2px solid ${color}`};
    background-color: ${({$colorBackground}) => $colorBackground};
    object-fit: contain;
    padding: 5px;
`;

const StyledChat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7px;
    margin: 2px 4px;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        opacity: 0.7;
    }
`;

const StyledIcon = styled.div`
    background-color: ${({color}) => color};
    border-radius: 50%;
    margin-top: -15px;
    margin-left: 32px;
    border: 1px solid #f5f5f7;
    width: 15px;
    height: 15px;
    

    &:hover {
        cursor: pointer;
    }
`;

export {
    StyledContainer,
    StyledImg,
    StyledIcon,
    StyledChat,
};