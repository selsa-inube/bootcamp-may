import { useState } from "react";
import { MdOutlineMicNone, MdOutlineSend, MdAttachFile } from "react-icons/md";
import { StyledContainer, StyledFile, StyledInput, StyledButtonSend, StyledEngrave } from "./styles";

export const AddMessage = ({ handleAddMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if(input === '') return;
    handleAddMessage(input);
    setInput('');
  };

  const handleChange = ({target}) => {
    setInput(target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };



  return (
    <StyledContainer>
        <StyledFile><MdAttachFile size="20"/></StyledFile>
        <StyledInput type="text" placeholder="Type a message" value={ input } onChange={ handleChange } onKeyDown={handleKeyDown}/>
        <StyledButtonSend onClick={ handleSend }><MdOutlineSend/></StyledButtonSend>
        <StyledEngrave><MdOutlineMicNone size="32"/></StyledEngrave>
    </StyledContainer>
  )
}
