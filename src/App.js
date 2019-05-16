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
      </Body>
    </Wrapper>
  </ThemeProvider>
)
