import styled from "styled-components";

const StyledSeacrh = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

const StyledSeacrhInput = styled.input`
    width: 350px;
    height: 50px;
    border: none;
    outline: none;
    background-color: #f9f9f9;
    border-radius: 20px;
    padding: 20px;
    font-size: 16px;
`;

const StyledSeacrhIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 20px;
    margin-left: -50px;
    width: 50px;
    height: 50px;
`;

export {
    StyledSeacrh,
    StyledSeacrhInput,
    StyledSeacrhIcon,
    
};