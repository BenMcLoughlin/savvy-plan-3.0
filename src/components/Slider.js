import React from 'react'
import styled from "styled-components"
import {setKeyValue_action, setNestedKeyValue_action} from "redux/actions"
import {connect} from "react-redux"

 const Slider = ({id, topLabel, bottomLabel, reducer, state, max, log, setKeyValue_action, setNestedKeyValue_action}) => {
        const props = state[reducer][id]

        return (
            <Wrapper>
                     <Label>{topLabel}</Label>
                     <Value
                       type="text"
                       autoComplete="off"
                       onChange={(e) => setNestedKeyValue_action("value", id, reducer, e.target.value) }                                         
                       value={props.value}
                     /> 
                     <Range 
                       type="range"
                       onChange={(e) => setNestedKeyValue_action("value", id, reducer, e.target.value) }  
                       value={props.value}
                       max={max ? max : 100000}
                       step={0.1}
                       percentage={0.5}
                     />
                        <Label style={{marginTop: "-1.4rem"}}>{bottomLabel}</Label>
            </Wrapper>
        )
}

const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps, {setKeyValue_action, setNestedKeyValue_action})(Slider)


//-----------------------------------------------style-----------------------------------------------//

const Wrapper = styled.div`
    margin-top: 1rem;
    margin-left: -3rem;
    position: relative;
    width: 20rem;
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


const Label = styled.div`
    font-size: 1.6rem;
    color: ${props => props.theme.color.darkGrey};
    text-transform: capitalize;
`

const Range = styled.input`

    width: 15rem;
    height: 2px;
    -webkit-appearance: none;
    background: linear-gradient(90deg,  
        #707070 50%,
        #C8C7C7 50%
        );
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    border-radius: 12px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    transition: all 1s ease;
    
&::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: white;
    border: .5px solid #707070;
    border-radius: 50%;
    cursor: pointer;
}

&:active::-webkit-slider-thumb
{
    background: #707070;
}

`

const Value = styled.input`
        margin-top: 1rem;
        text-align: center;
        color: #5A5758;
        background: none;
        border: none;
        font-size: 2.3rem};
        outline: none;
        ::-webkit-inner-spin-button, 
        ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
}
`
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_FILE DETAILS-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
// This is the entire rangebar wrapper that contains the label, the range bar input and the value output. 