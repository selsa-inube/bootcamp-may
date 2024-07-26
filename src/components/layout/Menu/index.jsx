import { TabMenu } from "../TabMenu";
import { StyledMainContainer, StyledPerfil, StyledImg, StyledIcon, StyledUserName, StyledStatus, StyledLine } from "./styles";

import { optionsMenu } from "@mocks/config/menu";
import { optionsPersonalInformation, PersonalInformation } from "@mocks/data/personal";
import { MdOutlineLocalSee } from "react-icons/md";
import { Notification } from "../Notification";



export const Menu = () => {
  return (
    <StyledMainContainer>
      <StyledPerfil>
        <StyledImg src={PersonalInformation.imagPath} alt="perfil" />
        <StyledIcon> <MdOutlineLocalSee size="16px"/></StyledIcon>
        <StyledUserName>Savannah Nguyen</StyledUserName>
        <StyledStatus>Product Designer</StyledStatus>
      </StyledPerfil>
      <TabMenu options={optionsPersonalInformation} />
      <StyledLine/>
      <TabMenu options={optionsMenu} />
      <Notification />

    </StyledMainContainer>
  )
}
