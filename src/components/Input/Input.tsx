import React, { FC } from "react";

import { FieldAttributes, useField } from "formik";
import { Border, Error, InputStyled, Container } from "./Input.styles";

const Input: FC<FieldAttributes<{}>> = ({ placeholder, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <Container>
      <InputStyled placeholder={placeholder} {...field} {...props} />
      {!!errorText && <Border />}
      <Error>{errorText}</Error>
    </Container>
  );
};

export default Input;
