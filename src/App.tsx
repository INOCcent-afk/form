import React from "react";
import { Route, Switch } from "react-router";

import SignUpPage from "./screens/SignUpPage";

import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={SignUpPage} />
      </Switch>
    </>
  );
}

export default App;
