import React from 'react'
import styled from "styled-components"
import {setKeyValue_action} from "redux/actions"
import {connect} from "react-redux"
import { ArrowLeftS} from "@styled-icons/remix-line"


function Back({label, name, reducer, setKeyValue_action, value, setDirection}) {
    return (
           < ArrowLeft onClick={() => { 
               setDirection("back")
               setKeyValue_action(name, reducer, value)}}/>
    )
}


export default connect(null, {setKeyValue_action})(Back)

//---------------------------STYLES-------------------------------------------//

const ArrowLeft = styled(ArrowLeftS)`
    height: 4.2rem;
    width: 4.2rem;
    color: #C8C7C7;
    cursor: pointer;
    position: absolute;
    top: 10rem;
    left: 10rem;
`