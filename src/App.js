import React from 'react';
import styled from "styled-components"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Onboard from "./pages/Onboard"

function App() {
  return (
    <Wrapper>
      <Header/>
        <Content>
            <Onboard/>
        </Content>
      <Footer/>
    </Wrapper>
  );
}

export default App;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  height: 120vh;
  width: 100%;
`
const Content = styled.div`
  background: #FCFAFC;
  height: 80rem;
  width: 100%;
`