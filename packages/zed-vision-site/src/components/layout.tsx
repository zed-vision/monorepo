import * as React from "react";
import { GlobalStyle, MainContainer } from "./utils/globalStyle";

export const Layout: React.FC = ({ children }) =>
  <React.Fragment>
    <GlobalStyle />
    <MainContainer>
      {children}
    </MainContainer>
  </React.Fragment>;
