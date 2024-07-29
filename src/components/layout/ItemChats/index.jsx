import {
    StyledPerson,
    StyledContainerIcon,
    StyledImg,
    StyledImgDes,
    StyledContainerMessage,
    StyledName,
    StyledMessage,
    StyledTime,
} from "./styles";

export const ItemChats = ({chat, handleSelectionPerson}) => {
    const message = chat.message.length > 40 ? chat.message.substring(0, 50) + '...' : chat.message;
    return (
        <StyledPerson onClick={()=>handleSelectionPerson(chat.id)}>
            <StyledContainerIcon>
                <StyledImg src={chat.image} alt="Person" $colorBackground={chat.colorBackground}/>
                {
                    chat.read > 0 && <StyledImgDes>{chat.read}</StyledImgDes>
                }
            </StyledContainerIcon>
            <StyledContainerMessage>
                <StyledName>{chat.name}</StyledName>
                <StyledMessage>{message}</StyledMessage>
            </StyledContainerMessage>
            <StyledTime>{chat.time}</StyledTime>

        </StyledPerson>
    )
}
