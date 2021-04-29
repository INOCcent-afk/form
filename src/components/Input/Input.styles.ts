import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const InputStyled = styled.input`
  margin-top: 10px;
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid ${Colors.foreBackgroundColor};
  outline: none;
  font-size: 16px;
  width: 100%;
  background: transparent !important;
  color: ${Colors.primaryFontColor};
  position: relative;

  &::placeholder {
    color: ${Colors.secondaryFontColor};
    font-weight: 500;
  }

  &::focus {
    background: transparent;
  }
`;

export const Error = styled.span`
  color: #f66363;
  font-size: 12px;
  font-weight: bold;
`;

export const Border = styled.div`
  width: 100%;
  position: absolute;
  top: 12px;
  padding: 25px 20px;
  border-radius: 5px;
  border: 1px solid #f66363;
  pointer-events: none;
`;

export const Container = styled.div`
  position: relative;
`;
