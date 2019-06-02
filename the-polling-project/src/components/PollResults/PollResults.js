import React from 'react';
import {Link} from "react-router-dom";

import Wrapper from "./Wrapper";
import PollGrid from "./PollGrid";
import MainDash from "./MainDash";
import MiddleRow1 from "./MiddleRow1";
import MiddleRow2 from "./MiddleRow2";
import MiddleRow3 from "./MiddleRow3";
import BottomRow1 from "./BottomRow1";
import BottomRow2 from "./BottomRow2";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import HeaderText from "./HeaderText";
import Square from "./Square";
import MainDashGrid from "./MainDashGrid";
import Question from "./Question";
import Category from "./Category";
import Participants from "./Participants";
import DiscussionButton from "./DiscussionButton";
import FilterResults from "./FilterResults";
import ResultsKey from "./ResultsKey";
import ResultIndividual from "./ResultIndividual";
import Graph1 from "./Graph1";
import ImgContainer from "./ImgContainer";
import PieChart from "./PieChart";
import ResultsOverview from "./ResultsOverview";
import Referrals from "./Referrals";
import Map from "./Map";
import Heat from "./Heat";

import graph from './graph1.png';
import pie from "./pie.png";
import overview from "./resultskey.png";
import referrals from "./referrals.png";
import map from "./map.png";
import heat from "./heat.png";

export default class PollResults extends React.Component {

    state = {
        category: "Legislation",
        question: "Was Trump\'s declaration of a national emergency the best way to advance immigration reform?",
        numParticipants: "16,039 Participants"
    }

    render() {
    return (
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
      <PollGrid>
        <MainDash>
          <MainDashGrid>
            <Question>
              <Category>{this.state.category}
              </Category>
              {this.state.question}
            </Question>
            <Participants>{this.state.numParticipants}</Participants>
            <DiscussionButton>Discussion</DiscussionButton>
            <FilterResults>Filter Results</FilterResults>
            <ResultsKey>
              <ResultIndividual>Strongly Agree</ResultIndividual>
              <ResultIndividual>Agree</ResultIndividual>
              <ResultIndividual>Neutral</ResultIndividual>
              <ResultIndividual>Disagree</ResultIndividual>
              <ResultIndividual>Strongly Disagree</ResultIndividual>
            </ResultsKey>
            <ImgContainer><Graph1 src={graph}></Graph1></ImgContainer>
          </MainDashGrid>
        </MainDash>
        <MiddleRow1><PieChart src={pie}></PieChart></MiddleRow1>
        <MiddleRow2><ResultsOverview src={overview}></ResultsOverview></MiddleRow2>
        <MiddleRow3><Referrals src={referrals}></Referrals></MiddleRow3>
        <BottomRow1><Map src={map}></Map></BottomRow1>
        <BottomRow2><Heat src={heat}></Heat></BottomRow2>
      </PollGrid>
    </Wrapper>
    )
    }
}