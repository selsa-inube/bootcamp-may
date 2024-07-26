import { MdAdd } from "react-icons/md";
import { InputSearch } from "../InputSearch";
import { ListPersonIcon } from "../ListPersonIcon";
import { StyledMainContainer, StyledHeader, StyledNewChat, StyledDivNew, StyledNewIcon, } from "./styles";
import { Chat } from "../Chat";


export const Container = () => {
  return (
    <StyledMainContainer>
      <StyledHeader>
        <ListPersonIcon />
        <InputSearch />
        <StyledNewChat> 
          <StyledDivNew>
            <p>New Chats</p>
            <StyledNewIcon>
              <MdAdd size="28px"/>
            </StyledNewIcon>
          </StyledDivNew>
        </StyledNewChat>
      </StyledHeader>
      <Chat />
    </StyledMainContainer>
  )
}
