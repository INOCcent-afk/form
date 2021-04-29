import React, { FC, ReactNode } from "react";

import { Btn } from "./Button.styles";

type Props = {
  children: ReactNode;
  type: "submit" | undefined;
};

const Button: FC<Props> = ({ children, type }: Props) => {
  return (
    <>
      <Btn type={type}>{children}</Btn>
    </>
  );
};

export default Button;
