import { chats } from "@mocks/data/personalChat";
import { StyledContainer, StyledImg, StyledIcon, StyledChat } from "./styles";


export const ListPersonIcon = () => {
  return (
    <StyledContainer>
      {
        chats.map((chat) => (
          <StyledChat key={chat.id}>
            <StyledImg src={chat.path} alt="imgAvatar" color={chat.color} $colorBackground={chat.colorBackground}/>
            { chat.available && <StyledIcon color={chat.color}></StyledIcon> }
          </StyledChat>
        ))
      }
    </StyledContainer>
  )
}
