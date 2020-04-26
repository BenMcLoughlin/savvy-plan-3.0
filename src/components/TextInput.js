import React from 'react'
import styled from "styled-components"
import {connect} from "react-redux"
import _ from "lodash"
import {setKeyValue_action} from "redux/actions"

function TextInput ({ name, reducer, state, setKeyValue_action})  {

    const reducerInUse = state[reducer]
    const value = reducerInUse[name]
console.log('tect input value', value );
    return (
        <Wrapper value={value}>
            <Label>{_.startCase(name)}</Label>
                <Input
                    onChange={(e) => setKeyValue_action(name, reducer, e.target.value)}
                    value={value}
                />
        </Wrapper>
    )
}
const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps, {setKeyValue_action})(TextInput)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 30rem;
    padding: 1rem;
    height: 9rem;
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;
    border: ${props => props.value ?  "0.5px solid #9AC0CD" :  "0.5px solid #E0DEDD"};
    border-radius: 5px;
`
const Label = styled.label`
    font-size: 1.2rem;
    font-weight: normal;
    pointer-events: none;
    color: #918F8F;
    font-weight: 800;

`
const Input = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 1.6rem;
    font-weight: 800;
    padding: 1.2rem;
    display: block;
    width: 28rem;
    height: 5rem;
    border: none;
    border-radius: 3px;
    color: #CDCCCC;

    &:focus{
        outline: none;
    }

`
