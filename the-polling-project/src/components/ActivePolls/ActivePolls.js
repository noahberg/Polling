import React from 'react';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import {Link} from "react-router-dom";

import Begin from "./Begin";
import BeginText from "./BeginText";
import Body from "./Body";
import Square from "./Square";
import MiddleImage from "./MiddleImage";
import ParticipateText from "./ParticipateText";
import TopText from "./TopText";
import Wrapper from "./Wrapper";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import HeaderText from "./HeaderText";


const theme = {
    font: "Avenir Next"
  };


  export default () => (

    <ThemeProvider theme={theme}>
        <Wrapper>
            <Body>
            <Header>
            <HeaderText primary>the</HeaderText>
            <HeaderText>polling project</HeaderText>
            <div></div>
          
            <HeaderLinks>FAQ</HeaderLinks>
          
            <HeaderLinks>Past Polls     </HeaderLinks>
        
          
          
            <Square><Link to={"/"} style={{textDecoration: "none"}}>
            <HeaderLinks>Log Out</HeaderLinks></Link></Square>
         
          </Header>


          <TopText>Active Polls</TopText>
          <ParticipateText>Participate in each poll to gain access to results and discussion with thousands of Americans.</ParticipateText>
          
          <MiddleImage></MiddleImage>
          <Begin>BEGIN</Begin>
          </Body>
        </Wrapper>
    </ThemeProvider>    
  )