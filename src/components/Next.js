import React from 'react'
import styled from "styled-components"
import {setKeyValue_action} from "redux/actions"
import {connect} from "react-redux"
import {ArrowRightCircle} from "@styled-icons/remix-fill/ArrowRightCircle"


function Next({label, name, valid, reducer, setKeyValue_action, value}) {
    console.log(valid);
    return (
           < ArrowRight valid={valid} onClick={() => setKeyValue_action(name, reducer, value)}/>
    )
}


export default connect(null, {setKeyValue_action})(Next)

//---------------------------STYLES-------------------------------------------//

const ArrowRight = styled(ArrowRightCircle)`
    height: 4.2rem;
    width: 4.2rem;
    color: ${props => props.valid ? "#9AC0CD" : "#C8C7C7"};
    cursor: pointer;
    position: absolute;
    top: 30rem;
    right: 10rem;
`