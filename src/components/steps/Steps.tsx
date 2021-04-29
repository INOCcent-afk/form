import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styles/Colors";

import { Container, CircleContainer, Circle } from "./Steps.styles";

const Steps = () => {
  const [step, setStep] = useState(1);
  const [circles, setCircles] = useState({
    first: true,
    second: false,
    third: false,
  });

  const stepHandler = (
    currentStep: number,
    fCircle: boolean,
    sCircle: boolean,
    tCircle: boolean
  ) => {
    setStep(currentStep);
    setCircles({
      first: fCircle,
      second: sCircle,
      third: tCircle,
    });
  };

  return (
    <Container>
      <p>Step {step} of 3</p>
      <CircleContainer>
        <Circle
          onClick={() => stepHandler(1, true, false, false)}
          circles={circles.first}
        />
        <Circle
          onClick={() => stepHandler(2, false, true, false)}
          circles={circles.second}
        />
        <Circle
          onClick={() => stepHandler(3, false, false, true)}
          circles={circles.third}
        />
      </CircleContainer>
    </Container>
  );
};

export default Steps;
