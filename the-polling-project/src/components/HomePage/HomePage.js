import React from 'react';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import {Link} from "react-router-dom";

import Body from "./Body";
import Wrapper from "./Wrapper";
import Header from "./Header";
import HeaderText from "./HeaderText";
import HeaderLinks from "./HeaderLinks";
import Square from "./Square";
import SemiCircle from "./SemiCircle";
import SignUp from "./SignUp";
import SignUpText from "./SignUpText";
import HeroText from "./HeroText";
import HeroText2 from "./HeroText2";
import MiddleHero from "./MiddleHero";
import MiddleHero2 from "./MiddleHero2";
import LearnMore from "./LearnMore";
import LearnMoreText from "./LearnMoreText";
import BottomSemi from "./BottomSemi";
import BottomGrid from "./BottomGrid";
import BottomSection from "./BottomSection";
import BottomText from "./BottomText";
import BottomImg1 from "./BottomImg1";
import BottomImg2 from "./BottomImg2";
import BottomImg3 from "./BottomImg3";


const theme = {
    font: "Avenir Next"
  };

export default () => (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Body>
          <SemiCircle>
          <Header>
            <HeaderText primary>the</HeaderText>
            <HeaderText>polling project</HeaderText>
            <div></div>
          
            <HeaderLinks>FAQ</HeaderLinks>
          
            <HeaderLinks>Past Polls</HeaderLinks>
          
            <HeaderLinks>Log In</HeaderLinks>
          
          
            <Square><Link to={"/onboarding"} style={{textDecoration: "none"}}>
            <HeaderLinks>Sign Up</HeaderLinks></Link></Square>
          </Header>
          <HeroText>A big data solution to the polling problem</HeroText>
          <HeroText2>Participate in polls and engage in authentic, open conversation without bots or bias.</HeroText2>
          </SemiCircle> 
          <SignUp><SignUpText><Link to={"/onboarding"} style={{textDecoration: "none", color: "white"}}>SIGN UP</Link></SignUpText></SignUp>
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

