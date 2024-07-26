import { useState } from 'react'
import { Conversation } from '../Conversation'
import { ListPerson } from '../ListPerson'
import { StyledContainer } from './styles'
import { chat as chatData} from '@mocks/data/chat'
import { PersonalInformation } from '@mocks/data/personal'

const chat = (type) =>{
  return chatData.filter((chat) => chat.typeChat === type);
}
export const Chat = () => {

  const chatIndividual = chat('individual');
  const chatGroup = chat('group');
  const idPerson = PersonalInformation.idPerson;

  const [idChatPerson, setIdChatPerson] = useState('');

  const dataChat = chatData.find((chat) => chat.id === idChatPerson);
  const [dataC, setDataChat] = useState(dataChat);

  const handleSelectionPerson = (id) => {
    setIdChatPerson(id);
  };

  
  const addMessage = (message) => {
    const date = new Date();
    let newMessage = {
      idPerson,
      text: message,
      time: date.getHours() + ':' + date.getMinutes(),
    };
    const newChat = chatData.map((chat) => {
      if(chat.id === idChatPerson){
        newMessage.id = chat.message.length + 1;
        chat.message.push(newMessage);
      }
      return chat
    });
    
    setDataChat(newChat);

  }

  return (
    <StyledContainer>
      <Conversation dataConversation={dataChat} idPerson={idPerson} handleAddMessage={addMessage}/>
      <div>
        {
          chatIndividual.length > 0 && <ListPerson message={chatIndividual} title='Chats' idPerson={idPerson} handleSelectionPerson={handleSelectionPerson}/>
        }
        {
          chatGroup.length > 0 && <ListPerson message={chatGroup} title='Group' idPerson={idPerson} handleSelectionPerson={handleSelectionPerson}/>
        }
      </div>
    </StyledContainer>
  )
}
