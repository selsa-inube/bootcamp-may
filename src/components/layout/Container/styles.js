import styled from "styled-components";

const StyledMainContainer = styled.div`
    background-color: #ffffff;
    height: 100vh;
`;

const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 40% 30% 30%;
    height: 8%;
    border-bottom: 1px solid #f2f2f2;
`;

const StyledNewChat = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

const StyledDivNew = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 30px;
    width: 250px;
    height: 40px;
    padding: 25px 15px;
    cursor: pointer;
`;

const StyledNewIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

export {
    StyledMainContainer,
    StyledHeader,
    StyledNewChat,
    StyledDivNew,
    StyledNewIcon,
};