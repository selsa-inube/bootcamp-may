import { ItemChats } from "../ItemChats"
import { StyledContainer,
         StyledContainerTitle, 
         StyledTitle, 
         StyledSeeAll, 
         StyledContainerPerson,
        } from "./styles"

const mapperMessage = (message, idPerson) => {
  const messageChat = message.map((chat) => {
    const {id, name, message, image, colorBackground} = chat;   
    let readMessage = 0,
        idMessageLast = 0,
        lastMessage;
    message.map((m) => {
      if (!m.read && m.idPerson !== idPerson){
        readMessage++;
      }
      if (idMessageLast < m.id){
        idMessageLast = m.id;
        lastMessage = m;
      }
    });
    const text = lastMessage.idPerson === idPerson ? 'You: ' + lastMessage.text : lastMessage.text;
    return {
      id,
      name,
      message: text,
      time: lastMessage.time,
      read: readMessage,
      colorBackground,
      image,
    }
  })
  return messageChat
}


export const ListPerson = ({message, title, idPerson, handleSelectionPerson}) => {

  const messageChat = mapperMessage(message, idPerson);

  return (
    <StyledContainer>
      <StyledContainerTitle>
        <StyledTitle>{title}</StyledTitle>
        <StyledSeeAll>See All</StyledSeeAll>
      </StyledContainerTitle>
      <StyledContainerPerson>
        {
          messageChat.map((chat) => (
            <ItemChats key={chat.id} chat={chat} handleSelectionPerson={handleSelectionPerson}/>
          ))
        }
      </StyledContainerPerson>
    </StyledContainer>
  )
}
