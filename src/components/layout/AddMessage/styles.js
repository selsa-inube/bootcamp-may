import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;    
    padding: 20px;    
    width: 100%;
`;

const StyledInput = styled.input`
    background-color: #f9f9f9;
    border-radius: 50px;
    border: none;
    font-size: 16px;
    margin: 0 10px;
    outline: none;
    padding: 20px;
    padding-left: 50px;
    width: 90%;
    ::placeholder {
        color: #908989;
    }
`;

const StyledFile = styled.div`
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 50%;
    color: #726666;
    display: flex;
    height: 40px;
    justify-content: center;
    left: 55px;
    position: relative;
    top: 15px;
    width: 40px;

    &:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }
`;

const StyledButtonSend = styled.button`
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 50%;
    border: none;
    color: #726666;
    display: flex;
    font-size: 20px;
    height: 40px;
    justify-content: center;
    padding: 10px;
    position: relative;
    right: 60px;
    top: 12px;
    width: 40px;

    &:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }
`;

const StyledEngrave = styled.div`
    align-items: center;
    background-color: #8f48ff;
    border-radius: 50%;
    color: white;
    display: flex;
    height: 60px;
    justify-content: center;
    padding: 10px;
    position: relative;
    right: 40px;
    top: 5px;
    width: 60px;
    
    &:hover {
        background-color: #7a3cc9;
        cursor: pointer;
    }
`;

export {
    StyledContainer,
    StyledFile,
    StyledInput,
    StyledButtonSend,
    StyledEngrave
};