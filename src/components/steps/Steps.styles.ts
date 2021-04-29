import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Container = styled.div`
  font-weight: bold;
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  align-items: baseline;

  p {
    font-size: 13px;
    color: ${Colors.primaryFontColor};
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const Circle = styled.div<{ circles: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${(props) =>
    props.circles ? Colors.primaryFontColor : Colors.secondaryFontColor};
  margin: 0 5px;
  cursor: pointer;
`;
