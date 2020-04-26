import React from 'react'
import styled from "styled-components"
import {connect} from "react-redux"
import _ from "lodash"

function ProgressBar({progress}) {
    let squares = _.range(progress)
    return (
        <Wrapper>
                {squares.map(d => <Square key={d} />)}
        </Wrapper>
    )
}

const mapStateToProps = (state) => ({
        progress: state.ui_reducer.progress,
})

export default connect(mapStateToProps)(ProgressBar)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
        height: 0.5rem;
        width: 100%; 
        background: #EAE2E2;
        box-shadow: 0 1px 2px rgba(0,0,0.01,.08);
        display: flex;
        
`
const Square = styled.div`
        height: 0.5rem;
        width: 8rem; 
        background: #9AC0CD;
        display: flex;

`
