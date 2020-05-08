import React from 'react';
import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Onboard from "./pages/Onboard"
import {ThemeProvider} from "styled-components"
import {theme} from "styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
      <Header/>
        <Content>
            <Onboard/>
        </Content>
      <Footer/>
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 120vh;
  width: 100%;
`
const Content = styled.div`
  background: #f9f9f9;
  height: 80rem;
  width: 100%;
`