import { StyledMain } from './styles';
import { Menu } from '../Menu';
import { Container } from '../Container';

export const AppPage = () => {
  return ( 
    <>
      <StyledMain>
        <Menu/>
        <Container/>
      </StyledMain>
    </>
  )
}
