import React from 'react'
import styled from "styled-components"
import _ from "lodash"
import {setKeyValue_action} from "redux/actions"
import {connect} from "react-redux"

function Button({label, name, reducer, setKeyValue_action, value}) {
    return (

         <Wrapper onClick={() => setKeyValue_action(name, reducer, value)}>
            {_.startCase(label)}
        </Wrapper>
    )
}


export default connect(null, {setKeyValue_action})(Button)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.button`
        height: 4.2rem;
        min-width: 10rem; 
        max-width: 17rem; 
        background: #5E9090;
        border-radius: 100px;
        box-shadow: 0 1px 2px rgba(0,0,0.01,.08);
        color: white;
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: 1.4rem;
        font-weight: bold;
        padding: 1rem 2rem 1rem 2rem;
        cursor: pointer;
        outline: none;
        transition: all .2s ease-in;
        &:hover {
            background: #548181;

        }
`