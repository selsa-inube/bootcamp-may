import { StyledContainer, StyledImg, StyledContainerName, StyledName, StyledTime } from "./styles"


export const AvatarConversation = ({ img, name, time, sender }) => {
  
  return (
    <StyledContainer>
        <StyledContainerName $sender={sender}>
          <StyledImg src={ img } alt="Imagen perfil" />
          <StyledName>{ sender ? 'You': name }</StyledName>
        </StyledContainerName>
        <StyledTime $sender={sender}>{ time }</StyledTime>
    </StyledContainer>
  )
}
