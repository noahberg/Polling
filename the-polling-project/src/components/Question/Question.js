import React from 'react';
import {Link} from "react-router-dom";

import Wrapper from "./Wrapper";
import Header from "./Header";
import HeaderText from "./HeaderText";
import HeaderLinks from "./HeaderLinks";
import Square from "./Square";
import Card from "./Card";
import Photo from "./Photo";
import QuestionHero from "./QuestionHero";
import Answer from "./Answer";
import Category from "./Category";
import Participate from "./Participate";
import Form from "./Form";
import { Formik } from "formik";


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
        <QuestionHero><Category>Legislation</Category>Was Trump's declaration of a national emergency
            the best way to advance immigration reform?
        </QuestionHero>
            <Form>
                <Participate>Strongly Agree</Participate>
                <Participate>Agree</Participate>
                <Participate>Neutral</Participate>
                <Participate>Disagree</Participate>
                <Participate>Strongly Disagree</Participate>
            </Form>
        <Answer>ANSWER</Answer>
    </Card>
</Wrapper>

)