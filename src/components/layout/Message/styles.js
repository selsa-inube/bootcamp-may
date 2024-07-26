import styled from "styled-components";

const StyledConversation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    /* overflow-y: auto; */
    /* height: 100%; */
    background-color: #f9f9f9;
`;

const StyledMessage = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding: 8px 5px;
    border-radius: 10px;
    border-bottom-left-radius: ${({$sender})=> $sender ?  '10px' : '0' };
    border-bottom-right-radius: ${({$sender})=> $sender ?  '0' : '10px' };
    background-color: ${({$sender})=> $sender ?  '#8f48ff' : '#fff' };
    width: fit-content;
    max-width: 70%;
    align-self: flex-start;
    position: relative;
    align-items: center;
    justify-content: space-around;
`;

const StyledText = styled.p`
    font-size: 1.1rem;
    font-weight: 350;
    color: ${({$sender})=> $sender ? '#fff' : '#000'};
    text-align: ${({$sender})=> $sender ? 'right' : 'left'};
    padding: ${({$sender})=> $sender ? '0px 20px 0px 25px' : '0px 10px'};
    margin: 8px 5px;
`;

const StyledRead = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8f48ff;
    border-radius: 50%;
    color: #ffffff;
    width: 25px;
    height: 25px;
    margin-right: 25px;
    margin-left: 10px;
`;

const StyledContainerMessage = styled.div`
    display: flex;
    justify-content: ${({$sender})=> $sender ? 'flex-end' : 'flex-start'};
    gap: 8px;
`;


export {
    StyledConversation,
    StyledMessage,
    StyledText,
    StyledRead,
    StyledContainerMessage,
};