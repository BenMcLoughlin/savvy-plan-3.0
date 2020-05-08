import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {setKeyValue_action, setNestedKeyValue_action} from "redux/actions"

function DualSelect({name, reducer, option1, option2, state, setKeyValue_action, setNestedKeyValue_action}) {
   const selected = state[reducer][name]                                                                                                        //displays

   return (
        <Div>
   
                <Option onClick={() => setKeyValue_action(name, reducer, option1)}
                      selected={ selected === option1}
                >
                    {option1}
                </Option>
                <Option onClick={() => setKeyValue_action(name, reducer, option2)}
                       selected={ selected === option2}
                >   {option2}
                </Option>
              <Pill selected={selected}
                    option1={option1}
              ></Pill>
        </Div>
    )
}

const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps, {setKeyValue_action, setNestedKeyValue_action})(DualSelect)

//--------------------------STYLES------------------------------------------------------//

const Div = styled.div`
        display: inline-flex;
        height: 40px;
        background-color: rgb(230, 228, 227);
        box-shadow: rgba(64, 62, 61, 0.05) 0px 3px 10px 0px;
        margin: 0px;
        padding: 0px;
        border-radius: 25px;
`
const Option = styled.div`
        position: relative;
        min-width: 16rem;
        color: ${props => props.selected ? props.theme.color.ice : props.theme.color.darkGrey};
        text-align: center;
        z-index: 1;
        transition: all 100ms linear 0s;
        margin: 0px;
        border-radius: 2.5rem;
        text-transform: Capitalize;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${props => props.theme.fontSize.smallMedium}
        
`
const Pill = styled.div`
        position: absolute;
        min-width: 16rem;
        height: 40px;
        background-color: ${props => props.theme.color.primary};
        transform: ${props => props.selected === props.option1 ? "translate(0,0)" : "translateX(100%)"};
        transition: all .3s ease;
        border-radius: 25px;
        animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
}
`