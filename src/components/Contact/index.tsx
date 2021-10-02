import { Container, Content} from '../Contact/styles';
import localization from '../../assets/localization.png';
import email from '../../assets/email.png';
import contact from '../../assets/contact.png';
import whatsapp from '../../assets/whatsapp.png';

export function Contact() {
  return (
    <Container id="contact">
      <Content>
        <div className="content">
          <h1>contact me</h1>
          <div className="info">
            <img src={localization} alt=""/>
            <p> Vitória de Santo Antão - PE</p>
          </div>
          <div className="info">
            <img src={email} alt=""/>
            <p>elanegoncalves2000@gmail.com</p>
          </div>
          <div className="info">
            <img src={contact} alt=""/>
            <p> (81) 2160-1543</p>
          </div>
          <div className="info">
            <img src={whatsapp} alt=""/>
            <p>(81) 9 8102-2211</p>
          </div>
        </div>
      </Content>
        
    </Container>
  );
}