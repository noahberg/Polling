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
            initialValues={{ email: "", password: ""}}
            validate={values => {
                console.log(values);
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
                    {errors.email && <Text color="red">{errors.email}</Text>}</Label>
                    <Input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        border={errors.email && "1px solid red"}
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    </P>
                    <P>
                    <Label>
                    Display Name 
                    {errors.display && <Text color="red">{errors.display}</Text>}</Label>
                    <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.display}
                        border={errors.display && "1px solid red"}
                        type="text"
                        name="display"
                        placeholder="Username"
                    />
                    </P>
                    <P>
                    <Label>
                    Password 
                    {errors.password && <Text color="red">{errors.password}</Text>}</Label>
                    <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        border={errors.password && "1px solid red"}
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


