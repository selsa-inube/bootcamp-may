import styled from "styled-components";

const StyledSwicth = styled.input`
    appearance: none;
    background-color: #ccc;
    border-radius: 18px;
    cursor: pointer;
    height: 15px;
    outline: none;
    position: relative;
    width: 30px;

    &:before {
        background-color: #16172b;
        border-radius: 50%;
        content: "";
        height: 11px;
        left: 2px;
        position: absolute;
        top: 2px;
        transition: transform 0.5s;
        width: 11px;
    }

    &:checked:before {
        transform: translateX(15px);
    }

`;
export {
    StyledSwicth,
};