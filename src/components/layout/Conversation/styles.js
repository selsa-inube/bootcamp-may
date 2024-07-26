import styled from "styled-components";

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
`;

const StyledImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: contain;
    padding: 5px;
`;

const StyleHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 15px;
    justify-content: space-around;
`;
const StyledContainerName = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
`;

const StyledHeaderName = styled.p`
    font-size: 1.2rem;
    color: #000;
`;

const StyledHeaderConection = styled.p`
    font-size: 0.8rem;
    color: #766b6b;
`;

const StyledConversation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 40px;
    background-color: #f9f9f9;
    overflow-y: auto;
    height: 80%;
    
`;


const StyledContainerMessage = styled.div`
    padding: 0px;
`;

const StyledInputMessage = styled.div`
    height: 12%;
    display: flex;
`;

export {
    StyledMain,
    StyledImg,
    StyleHeader,
    StyledContainerName,
    StyledIcon,
    StyledHeaderName,
    StyledHeaderConection,
    StyledConversation,
    StyledContainerMessage,
    StyledInputMessage,
};