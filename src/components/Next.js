import React, {useEffect} from 'react'
import styled from "styled-components"
import {setKeyValue_action} from "redux/actions"
import {connect} from "react-redux"
import {ArrowRightCircle} from "@styled-icons/remix-fill/ArrowRightCircle"


function Next({name, valid, reducer, setKeyValue_action, value, setDirection}) {

    useEffect(() => {                                                                               //Use effect is listening for the enter key to be pressed, if it is it will advance the page forward
        const pressEnter = (event) => {
           if (event.keyCode === 13) {                                                              //checks is key code 13, the enter button, was pressed
            setKeyValue_action(name, reducer, value)                                                //if it was it will fire the progressaction advacing the page
          }
        };
        window.addEventListener('keydown', pressEnter);
      }, [valid]);
    
    return (
        <Wrapper>
           < ArrowRight valid={valid} onClick={() => { 
            setDirection("forward")
            setKeyValue_action(name, reducer, value)}}/>
            {
                valid &&
                <p>Press Enter</p>
            }
     </Wrapper>
    )
}


export default connect(null, {setKeyValue_action})(Next)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    cursor: pointer;
    position: absolute;
    top: 30rem;
    right: 10rem;
`
const ArrowRight = styled(ArrowRightCircle)`
    height: 7.2rem;
    width: 7.2rem;
    color: ${props => props.valid ? "#9AC0CD" : "#C8C7C7"};
    cursor: pointer;
`