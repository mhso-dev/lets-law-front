import React from "react";
import Router from "./Router";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";

import GlobalStyles from "../Styles/GlobalStyles";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <Router />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
