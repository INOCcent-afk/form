import React, { FC, ReactNode } from "react";

import { Container } from "./PageContainer.styles";

type Props = {
  children: ReactNode;
};

const PageContainer: FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
