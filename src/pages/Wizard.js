import React, {useEffect} from 'react'
import styled from "styled-components"
import Button from "components/Button"
import TextInput from "components/TextInput"
import Form from "components/Form"
import _ from "lodash"
import MultiSelect from "components/MultiSelect"
import CumulativeSelect from "components/CumulativeSelect"
import NumberSelect from "components/NumberSelect"
import DualSelect from "components/DualSelect"
import Slider from "components/Slider"
import {connect} from "react-redux"
import {setKeyValue_action} from "redux/actions"
 
 function Wizard(props) {                                                                                                                         //since we're passing props straight on to the inputs we don't want to destructure here

    const {title, name, component, subTitle, user_reducer, progress, condition, conditionalProps1, conditionalProps2, setPosition} = props

    useEffect(() => {
        setPosition(progress)
    })


    return (
        <Wrapper>
            <Header>
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
            </Header>
            <Content>
                {
                    component === "Button" ?  <Button {...props}/> :
                    component === "TextInput"  ?  <TextInput {...props}/> :
                    component === "MultiSelect"  ?  <MultiSelect {...props}/> :
                    component === "CumulativeSelect"  ?  <CumulativeSelect {...props}/> :
                    component === "NumberSelect"  ?  <NumberSelect {...props}/> :
                    component === "Slider" ?  <Slider {...props}/> :
                    component === "twoSliders" ? 
                                                < Row>
                                                    <Slider {...props.props1}/> 
                                                    <Slider {...props.props2}/> 
                                                </ Row> :
                    component === "DualSelect" ?  <DualSelect {...props}/> :
                    component === "Form" ?  <Form {...props}/> :
                    null
                }
                {
                name === "numberOfChildren" ? <Children>
                                                    {
                                                       _.range(1, user_reducer.numberOfChildren + 1).map(d =>  <TextInput name={`child${d}BirthYear`} reducer={"user_reducer"}/>
                                                    )
                                                    }
                                             </Children>
                
                : null
                }
            </Content>


        </Wrapper>
    )
}

const mapStateToProps = (state) => ({
    progress: state.ui_reducer.progress,
    user_reducer: state.user_reducer
})

export default connect(mapStateToProps, {setKeyValue_action})(Wizard)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
        height: 40rem;
        width: 40rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 10rem;
        margin-left: -10rem;
`
const Header = styled.div`
        height: 18rem;
        width: 50rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
`
const Row = styled.div`
       display: flex;
       width: 40rem;
       justify-content: space-between;
`

const Content = styled.div`
        height: 30rem;
        width: 30rem; 
        position: relative;
        margin: 0 auto;
`

const Children = styled.div`
        min-height: 40rem;
        width: 30rem; 
        display: flex;
        flex-wrap: start;
        flex-direction: column;
`

