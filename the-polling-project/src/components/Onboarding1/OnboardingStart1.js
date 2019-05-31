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
import AccountProgress from "./AccountProgress";
import P from "./P";
import { Formik } from "formik";
import Label from "./Label";


export default () => (
    <Onboard>
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
        <Formik
            initialValues={{ email: "", password: "", display: ""}}
            validate={values => {
                let errors = {};
            
                // REGEX validation
                let regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                // Validation
                if (!values.email) {
                    errors.email = "Email is required";
                } else if (regex.test(values.email)) {
                    errors.email = "Invalid email address";
                }
            
                if (!values.password) {
                    errors.password = "A password is required";
                } else if (values.password.length < 8) {
                    errors.password = "Password must be 8 characters";
                }
            
                if (!values.display) {
                    errors.display = "A username is required";
                } else if (values.display.length < 7) {
                    errors.display = "Display name must be 7 characters";
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
                    Email 
                    {touched.email && errors.email && <Text color="red">{errors.email}</Text>}</Label>
                    <Input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    </P>
                    <P>
                    <Label>
                    Display Name 
                    {touched.display && errors.display && <Text color="red">{errors.display}</Text>}</Label>
                    <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.display}
                        type="text"
                        name="display"
                        placeholder="Username"
                    />
                    </P>
                    <P>
                    <Label>
                    Password 
                    {touched.password && errors.password && <Text color="red">{errors.password}</Text>}</Label>
                    <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        type="text"
                        name="password"
                        placeholder="*********"
                    />
                    </P>
                    <P>
                    <Button type="submit">CONTINUE</Button>
                    </P>
                    </Form>
            )}
        />
      </Onboard>
)


