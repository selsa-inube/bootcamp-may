import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    justify-content: left;
    background-color: #16172b;
    color: #e2e2e5;
    margin: 0px;
    width: 100%;
    padding: 2px 15px;
`;

const StyledUl = styled.ul`
    list-style-type: none;
    width: 100%;
`;

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.5s;
    width: 100%;
    border-radius: 20px;
    margin: 5px 0px;
    

    &:hover {
        background-color: #25263a;
    }
`;

const StyledDivIcon = styled.div`
    margin-right: 12px;
`;

const StyledDivOption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 100%;
`;

const StyledOptionText = styled.p`
    font-size: 16px;
    margin: 1px 2px;
`;

const StyledOptioSubText = styled.p`
    font-size: 12px;
    margin: 1px 2px;
    color: #a0a0a3;
`;

export {
    StyledNav,
    StyledUl,
    StyledLi,
    StyledDivIcon,
    StyledDivOption,
    StyledOptionText,
    StyledOptioSubText,
};