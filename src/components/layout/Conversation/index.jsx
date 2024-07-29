import { StyledMain,
         StyledImg, 
         StyleHeader, 
         StyledContainerName, 
         StyledIcon, 
         StyledHeaderName, 
         StyledHeaderConection, 
         StyledConversation,
         StyledContainerMessage,
         StyledInputMessage,
 } from './styles'
import { MdOutlineLocalPhone, MdOutlineVideocam, MdOutlineMoreVert } from 'react-icons/md'
import { Message } from '../Message';
import { AvatarConversation } from '../AvatarConversation';
import { AddMessage } from '../AddMessage';
import { PersonalInformation } from '@mocks/data/personal';
import React, { useEffect, useRef } from 'react';

const searchImage = (dataConversation, idPersonMessage ) => {
    if (dataConversation.typeChat === 'group'){
        return dataConversation.persons.find(person => person.id === idPersonMessage).image;
    }

    return dataConversation.image;
}

const searchName = (dataConversation, idPersonMessage ) => {
    if (dataConversation.typeChat === 'group'){
        return dataConversation.persons.find(person => person.id === idPersonMessage).name;
    }

    return dataConversation.name;
}

export const Conversation = ({ dataConversation, idPerson, handleAddMessage }) => {
    const conversationRef = useRef(null);

    useEffect(() => {

        if (conversationRef.current) {
            conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }

    }, [ dataConversation, handleAddMessage ]);
  return (
    <StyledMain>
        {
            dataConversation && (
                <>
                    <StyleHeader >
                        <StyledContainerName>
                            <StyledImg src={ dataConversation.image } alt="Person" />
                            <div>
                                <StyledHeaderName>{ dataConversation.name }</StyledHeaderName>
                                <StyledHeaderConection>Active now</StyledHeaderConection>
                            </div>
                        </StyledContainerName>

                        <StyledIcon>
                            <MdOutlineLocalPhone  size="20px" />
                            <MdOutlineVideocam size="20px" />
                            <MdOutlineMoreVert size="20px" />
                        </StyledIcon>
                    </StyleHeader>
                    <StyledConversation ref={ conversationRef }>
                        {
                            dataConversation.message.map(message => (
                                <StyledContainerMessage key={message.id}>
                                    <Message sender={ message.idPerson === idPerson } text={ message.text } read={ message.read } />
                                    <AvatarConversation img={ message.idPerson === idPerson ? PersonalInformation.imagPath : searchImage(dataConversation,message.idPerson) } 
                                                        sender={ message.idPerson === idPerson }
                                                        time={ message.time }
                                                        name={ searchName(dataConversation,message.idPerson) }
                                                        />
                                </StyledContainerMessage>
                                )
                            )
                        }
                    </StyledConversation>
                    <StyledInputMessage>
                        <AddMessage handleAddMessage={handleAddMessage}/>
                    </StyledInputMessage>
                </>
            )
        }
        
    </StyledMain>
  )
}
