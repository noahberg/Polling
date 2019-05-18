import React from "react";
import Form from "./Form";
import Account from "./Account";
import Button from "./Button";
import Error from "./Error";
import Input from "./Input";
import Label from "./Label";
import Onboard from "./Onboard";
import Optional from "./Optional";
import P from "./P";
import Personal from "./Personal";
import Progress from "./Progress";
import AccountProgress from "./AccountProgress";
import Text from "./Text";
import Title1 from "./Title1";
import Title2 from "./Title2";
import Topics from "./Topics";
import Wrapper from "./Wrapper";
import ProgressNav from "./ProgressNav";


export default () => (
    <Wrapper>
        <Onboard>
            <Form>
               <Title1>the</Title1>
               <Title2>polling project</Title2>
               <ProgressNav>
               <Account>1. Account</Account>
               <Personal>2. Personal</Personal>
               <Optional>3. Optional Information</Optional>
               <Topics>4. Topics</Topics></ProgressNav>
               <Progress>
                   <AccountProgress></AccountProgress>
               </Progress>
               <P>
                    <Label>Email</Label>
                    <Input><Text>mrpresident@potus.com</Text></Input>
                    <Error></Error>
               </P>
               <P>
                    <Label>Display Name</Label>
                    <Input><Text>Donald Trump</Text></Input>
                    <Error></Error>
               </P>
               <P>
                    <Label>Password</Label>
                    <Input><Text>************</Text></Input>
                    <Error></Error>
               </P>
               
               <Button>CONTINUE</Button>
               
            </Form>
        </Onboard>
    </Wrapper>
)