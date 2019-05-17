import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import trust from './trust.svg';
import visualization from './visualization.svg';
import open from './open.svg'

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import HeaderText from "./components/HeaderText";
import HeaderLinks from "./components/HeaderLinks";
import Square from "./components/Square";
import SemiCircle from "./components/SemiCircle";
import SignUp from "./components/SignUp";

const theme = {
  font: "Avenir Next"
};

const Body = styled.body`
  width: 100vw;
`
const SignUpText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw 1.2vh;
  font-weight: 700;
  letter-spacing: 0.15vw;
`
const HeroText = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: center;
  text-align: center;
  top: 4vh;
  margin-left: auto;
  margin-right: auto;
  font-size: 4vw 4vh;
  font-family: ${props => props.theme.font};
  font-weight: 700;
  color: white;
`

const HeroText2 = styled.h3`
  display: flex;
  justify-content: center;
  flex-direction: center;
  text-align: center;
  position: relative;
  top: 10vh;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.2vw 1.2vh;
  font-family: ${props => props.theme.font};
  font-weight: 400;
  letter-spacing: 0.08vw; 
  color: white;
`

const MiddleHero = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: center;
  text-align: center;
  position: relative;
  top: 30vh;
  padding-left: 14vw;
  padding-right: 14vw;
  margin-left: auto;
  margin-right: auto;
  font-size: 4vw 4vh;
  font-family: ${props => props.theme.font};
  font-weight: 700;
  color: black;
 ` 

 const MiddleHero2 = styled.h3`
  display: flex;
  justify-content: center;
  flex-direction: center;
  text-align: center;
  position: relative;
  top: 40vh;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.2vw 1.2vh;
  padding-left: 14vw;
  padding-right: 14vw;
  line-height: 7vh;
  font-family: ${props => props.theme.font};
  font-weight: 400;
  letter-spacing: 0.08vw; 
  color: black;
 ` 
const LearnMore = styled.div`
  z-index: 5;
  position: relative;
  background-image: linear-gradient(#D63131 10vh, white 40vw);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.12);
  font-family: ${props => props.theme.font};
  font-weight: 600;
  top: 50vh;
  margin-left: auto;
  margin-right: auto;
  color: white;
  width: 15vw;
  height: 7vh;
  display: flex;
  justify-content: center;
  flex-direction: center;
  text-align: center;
  border-radius: .8vw;
  border-width: .2vw;
  padding: 1.5em;
  cursor: pointer;
`

const LearnMoreText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw 1.2vh;
  font-weight: 700;
  letter-spacing: 0.15vw;
`  

const BottomSemi = styled.div`
  position: relative;
  background-image: radial-gradient(#D63131 -1vh, white 1000vw);
  box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.3);
  height: 75vh;
  width: 100%;
  border-radius: 40% 40% 40% 40% / 15% 15% 0% 0%;
  top: 90vh;
`

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`

const BottomSection = styled.div`
  text-align: center;
  color: white;
  font-family: ${props => props.theme.font};
  font-weight: 700;
  position: relative;
  top: 25vh;
  font-size: 1.6vw;
`

const BottomText = styled.p`
  font-weight: 500;
  padding: 1em 8em;
  font-size: 1vw;
`

const BottomImg1 = styled.div`
  margin: auto;
  justify-self: center;
  align-items: center;
  background-image: url(${trust});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 5em;
  height: 5em;
  position: relative;
  top: -10vh;
` 
const BottomImg2 = styled.div`
  margin: auto;
  justify-self: center;
  align-items: center;
  background-image: url(${visualization});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 5em;
  height: 5em;
  position: relative;
  top: -10vh;
`
const BottomImg3 = styled.div`
  margin: auto;
  justify-self: center;
  align-items: center;
  background-image: url(${open});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 5em;
  height: 5em;
  position: relative;
  top: -10vh;
`  

export default () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Body>
        <SemiCircle>
        <Header>
          <HeaderText primary>the</HeaderText>
          <HeaderText>polling project</HeaderText>
          <div></div>
          <Square>
          <HeaderLinks>FAQ</HeaderLinks></Square>
          <Square>
          <HeaderLinks>Past Polls</HeaderLinks></Square>
          <Square>
          <HeaderLinks>Log In</HeaderLinks></Square>
          <Square butn>
          <HeaderLinks>Sign Up</HeaderLinks>
          </Square>
        </Header>
        <HeroText>A big data solution to the polling problem</HeroText>
        <HeroText2>Participate in polls and engage in authentic, open conversation without bots or bias.</HeroText2>
        </SemiCircle> 
        <SignUp><SignUpText>SIGN UP</SignUpText></SignUp>
        <MiddleHero>The future of digital democracy</MiddleHero>
        <MiddleHero2>An online community for authentic public opinion conversation 
backed by SSN verification to eradicate bots and third-party influence.</MiddleHero2>
        <LearnMore><LearnMoreText>LEARN MORE</LearnMoreText></LearnMore>
        <BottomSemi>
          <BottomGrid>
            <BottomSection>
              <BottomImg1></BottomImg1>
            Trust and Transparency
              <BottomText>SSN never stored, only used for verification. 
                In-depth security measures ensure that each user is a real, 
                individual human for the most accurate poll results.</BottomText> 
            </BottomSection>
            <BottomSection>
            <BottomImg2></BottomImg2>
            Data Visualization
            <BottomText>The most accurate results deserve to be expressed clearly. 
              Our data visualization dashboards allow for in-depth exploration 
              and understanding.</BottomText>
            </BottomSection>
            <BottomSection>
            <BottomImg3></BottomImg3>
            Open Conversation
              <BottomText>Poll participants gain access to a full discussion section. 
                Go in-depth on the opinions of others, or sway your fellow citizens 
                through polite conversation.</BottomText>
            </BottomSection>
          </BottomGrid>
        </BottomSemi>
      </Body>
    </Wrapper>
  </ThemeProvider>
)
