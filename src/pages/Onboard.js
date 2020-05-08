import React, {useState} from 'react'
import styled from "styled-components"
import ProgressBar from "components/ProgressBar"
import {connect} from "react-redux"
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Wizard from "pages/Wizard"
import Back from "components/Back"
import Next from "components/Next"
import {onboardFlow_data} from "data/onboardFlow"

function Onboard({progress, user_reducer}) {

    const [direction, setDirection] = useState("forward")
    const [position, setPosition] = useState(0)

    const data = onboardFlow_data(user_reducer)

    return (
        <Wrapper>
               <ProgressBar/>
               <Text>
                <h3>{data[position].why}</h3>
                <p>{data[position].ask}</p>
            </Text>
               <Content>
                    <TransitionGroup component={StyledGrid}>
                        {
                            data.map((d,i) => i === progress &&
                            <CSSTransition key={i} timeout={400} classNames={`transition-${direction}`} setPosition={setPosition}>
                                            <Wizard {...d} />
                            </CSSTransition> )
                            }
                    </TransitionGroup>
               </Content>
               {
                   position > 0 &&
                   <>
                        <Back  name="progress"
                        reducer="ui_reducer"
                        value={progress  > 0 ? progress - 1 : 1}
                        setDirection={setDirection}
                    />
                    <Next name="progress"
                        reducer="ui_reducer"
                        valid={user_reducer[data[position].name]}
                        value={progress  < 20 ? progress + 1 : 20}
                        setDirection={setDirection}
                    />
                    </>
               }
                   
        </Wrapper>
    )
}

const mapStateToProps = (state) => ({
    progress: state.ui_reducer.progress,
    user_reducer: state.user_reducer,
})

export default connect(mapStateToProps)(Onboard)
//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
        height: 100%;
        width: 100%; 
        box-shadow: 0 1px 2px rgba(0,0,0.01,.08);
`
const Content = styled.div`
        height: 100%;
        width: 100%; 
        display: flex;
        justify-content: center;
`
const Text = styled.div`
        height: 20rem;
        width: 20rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: absolute; 
        left: 10rem;
        top: 15rem;
        background: yellow;
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 20px;

  .transition-back-enter {
        opacity: 0.01;
        transform: translate(-190px, 0);
      }
      .transition-forward-enter {
        opacity: 0.01;
        transform: translate(190px, 0);
      }
    
      .transition-forward-enter-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: all 400ms ease-in;
      }
      .transition-back-enter-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: all 400ms ease-in;
      }
      .transition-back-exit-enter {
        opacity: 0;
        display: hidden;
      }
      .transition-back-exit-active {
        opacity: 0;
        display: hidden;
      }
      .transition-forward-exit-enter {
        opacity: 0;
        display: hidden;
      }
      .transition-forward-exit-active {
        opacity: 0;
        display: hidden;
      }
`;


// .transition-back-enter {
//     opacity: 0.01;
//     transform: translate(-30px, 0);
//   }
//   .transition-forward-enter {
//     opacity: 0.01;
//     transform: translate(30px, 0);
//   }

//   .transition-forward-enter-active {
//     opacity: 1;
//     transform: translate(0, 0);
//     transition: all 3000ms ease-in;
//   }
//   .transition-back-enter-active {
//     opacity: 1;
//     transform: translate(0, 0);
//     transition: all 3000ms ease-in;
//   }
