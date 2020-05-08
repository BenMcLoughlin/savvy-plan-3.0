import React, {useState} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import _ from "lodash"
import {setKeyValue_action, setNestedKeyValue_action} from "redux/actions"
import AddButton from "components/AddButton"

function DualSelect({name, number, reducer, state, setKeyValue_action, setNestedKeyValue_action}) {
   const selected = state[reducer][name]                                                                                                        //displays
   const [topNumber, setTopNumber] = useState(5)
   return (
        <Div>
                {_.range(1,topNumber).map(d => <Number selected={selected === d}
                                             onClick={() => setKeyValue_action(name, reducer, d)}
                >
                                        {d}
                                        </Number>)}
                                        <AddWrapper>
                                             <AddButton onClick={() => setTopNumber(topNumber + 1)}/>
                                        </AddWrapper>
        </Div>
    )
}

const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps, {setKeyValue_action, setNestedKeyValue_action})(DualSelect)

//--------------------------STYLES------------------------------------------------------//

const Div = styled.div`
        height: 5rem;
        min-width: 8rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
`
const Number = styled.div`
        height: 5rem;
        min-width: 5rem;
        background-color: ${props => props.selected ?  "grey" : "none"};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.selected ?  "white" : "grey"};
        font-size: ${props => props.theme.fontSize.smallMedium};
        font-weight: bold;
        cursor: pointer;
`
const AddWrapper = styled.div`
        height: 5rem;
        width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
`
