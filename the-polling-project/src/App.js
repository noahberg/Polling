import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";

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
  background-image: linear-gradient(#D63131 -3vh, white 30vw);
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
  padding: 10px;
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
  background-image: radial-gradient(#D63131 -10vh, white 1000vh);
  box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.3);
  height: 70vh;
  width: 100%;
  border-radius: 40% 40% 40% 40% / 15% 15% 0% 0%;
  top: 90vh;
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
        </BottomSemi>
      </Body>
    </Wrapper>
  </ThemeProvider>
)
