import { StyledNav, StyledUl, StyledLi, StyledDivIcon, StyledDivOption, StyledOptionText, StyledOptioSubText } from "./styles"

export const TabMenu = ({options}) => {
  return (
    <StyledNav>
      <StyledUl>
        {
          options.map((option, index) => {
            return (
              <StyledLi key={index}>
                  <StyledDivIcon>
                    { option.icon }
                  </StyledDivIcon>
                  <StyledDivOption>
                    <StyledOptionText>{option.text}</StyledOptionText>
                    {
                      option.subText && <StyledOptioSubText>{option.subText}</StyledOptioSubText>
                    }                  
                  </StyledDivOption>
                  {
                    option.button && <div>{ option.button }</div>
                  }
                  

              </StyledLi>
            )
          })
        }
      </StyledUl>
    </StyledNav>
  )
}
