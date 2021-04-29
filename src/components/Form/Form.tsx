import React, { FC } from "react";
import Button from "../Button";
import Input from "../Input";

import arrowHead from "../../icons/icons8-expand-arrow-26.png";

import { Field } from "formik";
import * as yup from "yup";

import {
  Anchor,
  Container,
  FormContainer,
  Heading,
  Footer,
  Select,
  Option,
} from "./Form.styles";
import { Formik } from "formik";
import { Btn } from "../Button/Button.styles";

const validationSchema = yup.object({
  name: yup.string().required().max(20),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: yup.string().required("Password is required").min(8),
  type: yup.string().required(),
});

const Form: FC = () => {
  return (
    <Container>
      <Heading>
        <h1>Let's set up your account</h1>
        <p>
          Already have an account? <Anchor to="/">Sign In</Anchor>
        </p>
      </Heading>
      <Formik
        validateOnChange={true}
        initialValues={{ name: "", email: "", password: "", type: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <FormContainer>
            <Field
              placeholder="Your name"
              name="name"
              type="input"
              as={Input}
            />
            <Field
              name="email"
              type="email"
              placeholder="Email address"
              as={Input}
            />
            <Field name="type" type="select" as={Select} icon={arrowHead}>
              <option value="">I would describe my user type as</option>
              <Option>Option 1</Option>
              <Option>Option 2</Option>
              <Option>Option 3</Option>
            </Field>

            <Field
              name="password"
              type="password"
              placeholder="Password"
              as={Input}
            />
            <span className="passwordLabel">Minimum 8 characters</span>
            <Btn disabled={!isValid} type="submit">
              NEXT
            </Btn>
          </FormContainer>
        )}
      </Formik>
      <Footer>
        <p>
          By clicking the "Next" button, you agree to creating a free account,
          and to <Anchor to="/">Terms of Service</Anchor> and
          <Anchor to="/">Privacy Policy</Anchor>
        </p>
      </Footer>
    </Container>
  );
};

export default Form;
