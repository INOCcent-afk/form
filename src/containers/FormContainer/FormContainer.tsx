import React from "react";
import Form from "../../components/Form";
import Steps from "../../components/steps";
import { Container } from "./FormContainer.styles";

const FormContainer = () => {
  return (
    <Container>
      <Steps />
      <Form />
    </Container>
  );
};

export default FormContainer;
