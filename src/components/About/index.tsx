import music from '../../assets/music.png';
import write from '../../assets/write.png';
import read from '../../assets/read.png';
import rocketq from '../../assets/rocketq.png';
import dtmoney from '../../assets/dtmoney.png';
import proffy from '../../assets/proffy.png';

import { Container, Content } from "../About/styles";

export function About() {
  return (
    <>
    <Container id="about">
      <Content>
        <div className="content-left">
          <div className="about-me">
            <h1> about me</h1>
            <p>
            Hi, me chamo Elaine e há um tempo me encontrei neste universo da tecnologia e desde lá venho sempre buscando me aprofundar mais nos conhecimentos de desenvolvimento de software, onde através de linhas de códigos conseguimos criar o inimaginavél.
            </p>
          </div>
          <div className="hobbies">
            <h1>hobbies</h1>
            <div className="imagens">
              <div className="assets">
                <img src={music} alt=""/>
                <p>music</p>
              </div>
              <div className="assets">
                <img src={write} alt=""/>
                <p>write</p>
              </div>
              <div className="assets">
                <img src={read} alt=""/>
                <p>read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-rigth">
          <h1>projects</h1>
          <div className="projects">
            <img src={rocketq} alt="rocketq"/>
            <p>NLW Together - Rocketseat</p>
          </div>
          <div className="projects">
            <img src={dtmoney} alt="dtmoney"/>
            <p>Ignite - Rocketseat</p>
          </div>
          <div className="projects">
            <img src={proffy} alt="proffy"/>
            <p>NLW Discovery - Rocketseat</p>
          </div>
        </div>

      </Content>
    </Container>
    </>
  );
}