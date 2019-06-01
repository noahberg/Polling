import React from 'react';
import {ThemeProvider} from "styled-components";
import styled from "styled-components";
import {Link} from "react-router-dom";

import Body from "./Body";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import HeaderText from "./HeaderText";
import Square from "./Square";
import Wrapper from "./Wrapper";
import ResultWrapper from "./ResultWrapper";
import MainResult from "./MainResult";

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

            <ResultWrapper> <MainResult></MainResult></ResultWrapper>
          
          </Body>
        </Wrapper>
    </ThemeProvider>    
  )