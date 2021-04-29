import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { Form } from "formik";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  color: ${Colors.primaryFontColor};
`;

export const Heading = styled.div`
  h1 {
    margin: 30px 0;
    font-size: 35px;
  }
  p {
    margin: 20px 0;
    font-weight: 500;
  }
`;

export const Select = styled.select<{ icon: string }>`
  padding: 15px 20px;
  margin: 10px 0;
  border: 1px solid ${Colors.foreBackgroundColor};
  outline: none;
  background: ${Colors.secondaryColor};
  cursor: pointer;
  color: ${Colors.secondaryFontColor};

  background: url(${(props) => props.icon}) no-repeat 96% 50%;
  -moz-appearance: none;
  background-size: 12px;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  appearance: none;
  font-weight: 500;

  option {
    color: ${Colors.primaryFontColor};
    padding: 20px;
  }
`;
export const Option = styled.option``;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  .passwordLabel {
    color: ${Colors.secondaryFontColor};
    font-size: 12px;
  }
`;

export const Anchor = styled(Link)`
  color: ${Colors.primaryColor};
  font-weight: bold;
  text-decoration: none;
  margin-left: 2px;
`;

export const Footer = styled.div`
  p {
    font-size: 13px;
    font-weight: 500;
    line-height: 30px;
  }
`;
