import React, {useEffect} from 'react'
import styled from "styled-components"
import Button from "components/Button"
import TextInput from "components/TextInput"
import Select from "components/Select"
import {connect} from "react-redux"
import {setKeyValue_action} from "redux/actions"
import Back from "components/Back"
import Next from "components/Next"

 function Wizard(props) {                                                                                                                         //since we're passing props straight on to the inputs we don't want to destructure here

    const {title, name, component, why, ask, subTitle, user_reducer, progress, condition, conditionalProps1, conditionalProps2} = props

    return (
        <Wrapper>
            <Header>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </Header>
            <Text>
                <h3>{why}</h3>
                <p>{ask}</p>
            </Text>
            <Content>
                {
                    component === "Button" ?  <Button {...props}/> :
                    component === "TextInput" ?  <TextInput {...props}/> :
                    component === "Select"  ?  <Select {...props}/> :
                    component === "Select" ?  <Select {...props}/> :
                    null
                }
                {
                condition === user_reducer[name] ? <Condition>
                                                       <TextInput {...conditionalProps1}/>
                                                       <TextInput {...conditionalProps2}/>
                                                  </Condition> : null
                }
            </Content>

                       <Back  name="progress"
                            reducer="ui_reducer"
                            value={progress  > 0 ? progress - 1 : 1}
                        />
                      <Next name="progress"
                            reducer="ui_reducer"
                            valid={user_reducer[name]}
                            value={progress  < 10 ? progress + 1 : 10}
                        />
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
`
const Header = styled.div`
        height: 10rem;
        width: 50rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
`
const Condition = styled.div`
        position: absolute;
        top: 0;
        right: -32rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
const Content = styled.div`
        height: 30rem;
        width: 30rem; 
        position: relative;
        margin: 0 auto;
`

