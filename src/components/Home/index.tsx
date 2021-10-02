import { Container, Content} from '../Home/styles';

import home from '../../assets/home.png';
import about from '../../assets/about.png';
import skills from '../../assets/skills.png';
import contact from '../../assets/contact.png';
import photo from '../../assets/photo.png';
import line from '../../assets/line.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

export function Home() {
  return (
    <Container>
      <Content>
        <div className="barleft">
          <a href="#">
          <img src={home} alt="home"/>
          </a>
          <a href="#about">
          <img src={about} alt="about"/>
          </a>
          <a href="#skills">
          <img src={skills} alt="skills"/>
          </a>
          <a href="#contact">
          <img src={contact} alt="contact"/>
          </a>
        </div>

        <div className="photo">
          <img src={photo} alt="photo"/>
        </div>

        <div className="info">
          <h1>Elaine Gonçalves</h1>
          <div className="separator">
            <img src={line} alt="line"/>
            <img src={line} alt="line"/>
          </div>
          <p>DESENVOLVEDORA DE SOFTWARE</p>
          <div className="buttons">
            <a href="https://github.com/Elaine-Gon">
              <img src={github} alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/elaine-gon%C3%A7alves-54b273201/">
              <img src={linkedin} alt="linkedin"/>
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
}