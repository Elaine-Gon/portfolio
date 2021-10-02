import { Container, Content} from '../Skills/styles';

import barHTML from '../../assets/barHTML.png';
import barCSS from '../../assets/barCSS.png';
import barJS from '../../assets/barJS.png';
import barTS from '../../assets/barTS.png';
import barReact from '../../assets/barReact.png';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JS from '../../assets/js.png';
import TS from '../../assets/ts.png';
import React from '../../assets/react.png';
import estacio from '../../assets/estacio.png';
import rocketseat from '../../assets/rocketseat.png';
import digitalOne from '../../assets/digital.png'

export function Skills() {
  return (
    <>
    <Container id="skills">
      <Content>
        <div className="content-left">
          <h1>skills</h1>
          <div className="skills">
            <img className="bar" src={barHTML} alt=""/>
            <img className="icons"src={HTML} alt=""/>
          </div>
          <div className="skills">
            <img className="bar" src={barCSS} alt=""/>
            <img className="icons" src={CSS} alt=""/>
          </div>
          <div className="skills">
            <img className="bar" src={barJS} alt=""/>
            <img className="icons1" src={JS} alt=""/>
          </div>
          <div className="skills">
            <img className="bar" src={barTS} alt=""/>
            <img className="icons1" src={TS} alt=""/>
          </div>
          <div className="skills">
            <img className="bar" src={barReact} alt=""/>
            <img className="icons1" src={React} alt=""/>
          </div>
        </div>
        <div className="content-rigth">
          <h1>education</h1>
          <div className="education">
            <img src={estacio} alt=""/>
            <p>Graduação Análise e Desenvolvimento de Sistemas</p>
          </div>
          <div className="education">
            <img src={rocketseat} alt=""/>
            <p>Rocketseat Education</p>
          </div>
          <div className="education">
            <img src={digitalOne} alt=""/>
            <p>Digital Innovation One Education</p>
          </div>
        </div>
      </Content>
    </Container>
    </>
  );
}