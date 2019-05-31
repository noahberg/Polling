import React from 'react';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import {Link} from "react-router-dom";

//import Begin from "./Begin";
import Body from "./Body";
import Card from "./Card";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import Square from "./Square";
import HeaderText from "./HeaderText";
import PollImage from "./PollImage";
import Skip from "./Skip";
//import Title from "./Title";
import Wrapper from "./Wrapper";


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
            <Card> 
                <PollImage>
                </PollImage>
                
                <Skip>Skip</Skip>
            </Card>
            
            </Body>
        </Wrapper>
    </ThemeProvider>
)