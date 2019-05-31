import React from "react";
import styled from 'styled-components';

import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Title1 from "./Title1";
import Title2 from "./Title2";
import Text from "./Text";
import Onboard from "./Onboard";
import ProgressNav from "./ProgressNav";
import Account from "./Account";
import Personal from "./Personal";
import Optional from "./Optional";
import Topics from "./Topics";
import Progress from "./Progress";
import PersonalProgress from "./PersonalProgress";
import P from "./P";
import { Formik } from "formik";
import Label from "./Label";
import Wrapper from "./Wrapper";
import InfoText from "./InfoText";
import IdCard from "./IdCard";
import ReadMore from "./ReadMore";


export default () => (
<Wrapper>
    <Onboard primary>
        <Title1>the</Title1>
        <Title2>polling project</Title2>
        <ProgressNav>
            <Account>1. Account</Account>
            <Personal>2. Personal</Personal>
            <Optional>3. Optional Information</Optional>
            <Topics>4. Topics</Topics></ProgressNav>
        <Progress>
            <PersonalProgress></PersonalProgress>
        </Progress>
        <Formik
            initialValues={{ firstname: "", lastname: "", dob: "", ssn: ""}}
            validate={values => {
                let errors = {};
            
                // REGEX validation
                let regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                // Validation
                if (!values.firstname) {
                    errors.firstname = "First name is required";
                } else if (values.firstname.length < 1) {
                    errors.firstname = "Invalid first name";
                }
            
                if (!values.lastname) {
                    errors.lastname = "Last name is required";
                } else if (values.lastname.length < 1) {
                    errors.lastname = "Invalid last name ";
                }
            
                if (!values.dob) {
                    errors.dob = "DOB is required";
                } else if (values.dob.length < 6) {
                    errors.dob = "Invalid Date of Birth";
                }

                if (!values.ssn) {
                    errors.ssn = "SSN is required";
                } else if (values.ssn.length < 9) {
                    errors.ssn = "Invalid SSN";
                }
                return errors;
            }}
            
            onSubmit={values => {
                console.log(values);
            }}
            render={({
                touched,
                errors,
                values,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <Form onSubmit={handleSubmit}>
                    <P>
                    <Label>
                    First Name 
                    {touched.firstname && errors.firstname && <Text color="red">{errors.firstname}</Text>}</Label>
                    <Input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        type="text"
                        name="firstname"
                        placeholderTextColor = "white"
                        placeholder="Firstname"
                    />
                    </P>
                    <P>
                    <Label>
                    Last Name 
                    {touched.lastname && errors.lastname && <Text color="red">{errors.lastname}</Text>}</Label>
                    <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        type="text"
                        name="lastname"
                        placeholderTextColor = "white"
                        placeholder="Last Name"
                    />
                    </P>
                    <P primary>
                    <Label>
                    Date Of Birth 
                    {touched.dob && errors.dob && <Text color="red">{errors.dob}</Text>}</Label>
                    <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dob}
                        type="text"
                        name="dob"
                        placeholderTextColor = "white"
                        placeholder="01/12/1994"
                    />
                    </P>
                    <P primary>
                    <Label>
                    Social Security Number
                    {touched.ssn && errors.ssn && <Text color="red">{errors.ssn}</Text>}</Label>
                    <Input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.ssn}
                        type="text"
                        name="ssn"
                        placeholderTextColor = "white"
                        placeholder="123-45-6789"
                    />
                    </P>
                    <P>
                    <Button type="submit">CONTINUE</Button>
                    </P>
                    </Form>
            )}
        />
      </Onboard>
      <Onboard>
          <InfoText>We Never Store Your Social Security Number. 
              This Information Is Only Used To Verify Your Identity 
              And Preserve Accurate Polling Results That Reflect The 
              General Population.</InfoText>
          <IdCard></IdCard>
          <ReadMore>READ MORE</ReadMore>
      </Onboard>
    </Wrapper>
)