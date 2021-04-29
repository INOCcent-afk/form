import React from "react";
import RightHeading from "../../components/RIghtHeading";
import FormContainer from "../FormContainer";
import { Container } from "./SignUpContainer.styles";

const SignUpContainer = () => {
  return (
    <>
      <Container>
        <FormContainer />
        <RightHeading />
      </Container>
    </>
  );
};

export default SignUpContainer;
