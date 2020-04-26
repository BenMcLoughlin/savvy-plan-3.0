import React from 'react'
import styled from "styled-components"
import {connect} from "react-redux"
import _ from "lodash"
import {setKeyValue_action} from "redux/actions"

function Select ({array, label, name, reducer, state, setKeyValue_action})  {
    const reducerInUse = state[reducer]
    const value = reducerInUse[name]
    const {user_reducer} = state

    return (
        <Wrapper>
            <Label>{_.startCase(label)}</Label>
              {
                  array.map((d, i, a) => <Square 
                                   first={i === 0}
                                   selected={d === value}
                                   onClick={() => setKeyValue_action(name, reducer, d)}
                  >{_.startCase(d)}</Square>)
              }
              <Square last>
                  <Input
                           onChange={(e) => setKeyValue_action("other", reducer, e.target.value)}
                           value={user_reducer.other}
                  ></Input>
              </Square>
        </Wrapper>
    )
}
const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps, {setKeyValue_action})(Select)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 30rem;
    min-height: 30rem;
    position: relative;
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    font-size: 1.6rem;
    font-weight: normal;
    pointer-events: none;
    color: #918F8F;
    font-weight: 800;

`

const Square = styled.div`
    width: 100%;
    padding: 1rem;
    min-height: 5rem;
    position: relative;
    display: flex;
    border-radius: ${props => props.first ? "10px" : 0} 
                   ${props => props.first ? "10px" : 0} 
                   ${props => props.last ? "10px" : 0} 
                   ${props => props.last ? "10px" : 0};
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 800;
    background: ${props => props.selected ? "#5E9090" : "white"};
    border: 0.5px solid #E0DEDD;
    cursor: pointer;
    color: ${props => props.selected ?  "white" : "#CDCCCC"};
`
// const LargeSquare = styled(Sqaure)`

//     height: 5rem;
// `
const Input = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 1.6rem;
    font-weight: 800;
    padding: 1.2rem;
    display: block;
    width: 27rem;
    height: 5rem;
    border: none;
    border-radius: 3px;
    color: #CDCCCC;

    &:focus{
        outline: none;
    }

`
