import React from 'react'
import styled from "styled-components"
import Back from "components/Back"
import Next from "components/Next"
import TextInput from "components/TextInput"
import Select from "components/Select"
import {connect} from "react-redux"
import {setKeyValue_action} from "redux/actions"

 function FirstName({progress, user_reducer}) {

    const {maritalStatus} = user_reducer

    return (
        <Wrapper>
            THIS IS FIRST NAME
            {/* <TextInput
                label="first name"
                reducer="user_reducer"
                change="firstName"
            />
            <TextInput
                label="birth year"
                reducer="user_reducer"
                change="birthYear"
            /> */}
            {/* <Select
              label="gender"
              array={["male", "female", "prefer not to say", "write below"]}
              reducer="user_reducer"
              change="gender"
            /> */}
            <Select
              label="marital status"
              array={["single", "married", "common-law", "write below"]}
              reducer="user_reducer"
              change="maritalStatus"
            /> {
                maritalStatus === "married" ? 
                <TextInput
                label="first name"
                reducer="user_reducer"
                change="firstName"
            />
            : null
            }
            <Back label="Continue"
                            change="progress"
                            reducer="ui_reducer"
                            value={progress - 1}
                        />
            <Next label="Continue"
                            change="progress"
                            reducer="ui_reducer"
                            value={progress - 1}
                        />


        </Wrapper>
    )
}

const mapStateToProps = (state) => ({
    progress: state.ui_reducer.progress,
    user_reducer: state.user_reducer
})

export default connect(mapStateToProps, {setKeyValue_action})(FirstName)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
        height: 20rem;
        width: 40rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 10rem;
`