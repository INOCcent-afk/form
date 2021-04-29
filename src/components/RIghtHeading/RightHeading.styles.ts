import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-basis: 35%;
  flex-direction: column;
  color: ${Colors.whiteFrontColor};
`;

export const Content = styled.div`
  max-width: 340px;
  margin: 0 auto;

  h6 {
    text-align: center;
    margin: 80px 0;
    font-weight: light;
    font-size: 30px;
  }

  p {
    font-size: 19px;
    line-height: 35px;

    color: ${Colors.foreFontColor};
  }
`;
