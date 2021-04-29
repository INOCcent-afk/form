import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Btn = styled.button`
  padding: 20px 10px;
  background: ${Colors.primaryColor};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px 0;
  font-size: 12px;
  color: ${Colors.whiteFrontColor};

  &:disabled {
    background: ${Colors.foreBackgroundColor} !important;
    color: ${Colors.secondaryFontColor};
  }
`;
