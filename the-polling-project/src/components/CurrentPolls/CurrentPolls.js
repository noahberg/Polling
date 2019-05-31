import React from 'react';
import { ThemeProvider } from "styled-components";
import {Link} from "react-router-dom";

import Wrapper from "./Wrapper";
import Header from "./Header";
import HeaderText from "./HeaderText";
import HeaderLinks from "./HeaderLinks";
import Square from "./Square";
import Card from "./Card";
import Photo from "./Photo";
import Question from "./Question";
import Participants from "./Particpants";
import Begin from "./Begin";
import Skip from "./Skip";
import Category from "./Category";

export default () => (

<Wrapper>
    <Header>
        <HeaderText primary>the</HeaderText>
        <HeaderText>polling project</HeaderText>
        <div></div>
          
        <HeaderLinks>FAQ</HeaderLinks>
          
        <HeaderLinks>Past Polls</HeaderLinks>
          
        <Square><Link to={"/"} style={{textDecoration: "none"}}>
        <HeaderLinks>Log Out</HeaderLinks></Link></Square>
    </Header>
    <Card>
        <Photo></Photo>
        <Question><Category>Legislation</Category>Was Trump's declaration of a national emergency
            the best way to advance immigration reform?
        </Question>
        <Participants>16,039 Participants</Participants>
        <Begin>BEGIN</Begin>
        <Skip>SKIP</Skip>
    </Card>
</Wrapper>

)