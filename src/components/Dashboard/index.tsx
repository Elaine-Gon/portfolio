import { Home } from '../Home';
import { About } from '../About';
import { Skills } from '../Skills';
import { Contact } from '../Contact'; 
import { Container, Footer } from './styles';

export function Dashboard() {
  return (
    <>
      <Container>
        <Home/>
        <About/>
        <Skills/>
        <Contact/>
      <Footer> by Elaine Gonçalves</Footer>
      </Container>
    </>
  );
}