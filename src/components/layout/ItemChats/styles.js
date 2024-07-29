import styled from "styled-components";

const StyledPerson = styled.div`
    display: grid;
    grid-template-columns: 10% 80% 10%;
    padding: 20px 12px;

    &:hover {
        background-color: #cafcff;
        cursor: pointer;
    }
`;

const StyledContainerIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    `;

const StyledImg = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: contain;
    padding: 5px;
    background-color: ${({ $colorBackground }) => $colorBackground ? $colorBackground : '#c4eafc'};
`;

const StyledImgDes = styled.div`
    position: relative;
    top: 30px;
    left: -20px;
    background-color: #f00;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    padding: 5px;
    align-items: center;
`;

const StyledContainerMessage = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledName = styled.p`
    font-size: 1.2rem;
    font-weight: 450;
    color: #000;
`;

const StyledMessage = styled.p`
    font-size: 1rem;
    color: #8e8686;
`;

const StyledTime = styled.div`
    font-size: 1rem;
    color: #8e8686;
    display: flex;
    justify-content: end;
`;

export {
    StyledPerson,
    StyledContainerIcon,
    StyledImg,
    StyledImgDes,
    StyledContainerMessage,
    StyledName,
    StyledMessage,
    StyledTime,
};