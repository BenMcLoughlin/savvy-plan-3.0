import React, {useState} from 'react'
import styled from "styled-components"
import ProgressBar from "components/ProgressBar"
import {connect} from "react-redux"

import Next from "components/Next"
import Button from "components/Button"
import TextInput from "components/TextInput"
import Wizard from "pages/Wizard"
function Onboard({progress, user_reducer}) {


    const data = [
        {
            title: "Lets build you a financial Plan",
            subTitle: "We’ll gather some information that will enable us to build a financial plan suited to you.",
            reducer: "ui_reducer",
            label: "continue",
            value: 1,
            name: "progress",
            component: "Button",
            condition: "none"
        },
        {
            title: "What's your first Name?",
            component: "TextInput",
            reducer: "user_reducer",
            name: "firstName",
            why: "Why we ask",
            ask: "We'll use this to keep your details seperate from a spouse.",
        },
        {
            title: "What's your Birth Year?",
            component: "TextInput",
            reducer: "user_reducer",
            name: "birthYear",
            why: "Why we ask",
            ask: "This forms the basis of our financial calculations.",
        },
        {
            title: "What is your Gender?",
            component: "Select",
            reducer: "user_reducer",
            name: "gender",
            array: ["male", "female", "prefer not to say", "write below"],
            why: "Why we ask",
            ask: "We want to ensure our planning is inclusive.",
            condition: "none"
        },
        {
            title: "What is your marital status?",
            component: "Select",
            reducer: "user_reducer",
            name: "maritalStatus",
            array: ["single", "married", "common-law", "write below"],
            condition: "married",
            why: "Why we ask",
            ask: "Having a spouse has a large impact on your plan",
            conditionalProps1: {
                title: "What's the first Name of your spouse?",
                component: "TextInput",
                reducer: "user_reducer",
                name: "spousesFistName",
                 },
            conditionalProps2: {
                title: "What's the birth year of your spouse?",
                component: "TextInput",
                reducer: "user_reducer",
                name: "spousesBirthYear",
                 },
        },
        {
            title: "What's your spouse's first Name?",
            component: "TextInput",
            reducer: "user_reducer",
            name: "spouseFirstName",
            condition: "married",
        },
        {
            title: "What's your Birth Year?",
            component: "TextInput",
            reducer: "user_reducer",
            name: "spouseBirthYear",
            condition: "married",
        },
        {
            count: 6, 
            pageName: "maritalStatus",
            title: "",
            component: "TextInput",
            reducer: "user_reducer",
            name: "gender",
            array: [1,2,3,4],
        },
    ]

    return (
        <Wrapper>
               <ProgressBar/>
               <Content>
                   {
                       data.map((d,i) => i === progress && <Wizard {...d} />)
                    }
               </Content>
        </Wrapper>
    )
}

const mapStateToProps = (state) => ({
    progress: state.ui_reducer.progress,
    user_reducer: state.user_reducer,
})

export default connect(mapStateToProps)(Onboard)
//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
        height: 100%;
        width: 100%; 
        box-shadow: 0 1px 2px rgba(0,0,0.01,.08);
`
const Content = styled.div`
        height: 100%;
        width: 100%; 
        display: flex;
        justify-content: center;

`
const Header = styled.div`
        height: 10rem;
        width: 50rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
`

const Text = styled.div`
        height: 10rem;
        width: 20rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: absolute; 
        left: 10rem;
        top: 15rem;
`
const Div = styled.div`
    height: 20rem;
    width: 40rem; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 10rem;
`