import React from 'react'
import styled from "styled-components"
import {connect} from "react-redux"
import Button from "components/Button"

 function Onboard({progress}) {
    return (
        <Wrapper>
                    <h1>Lets Build you a personalized Finanical Plan</h1>
                    <p>We’ll gather some information so we can 
                    build a plan suited to you. !! </p>
                    <Button label="Continue"
                            change="progress"
                            reducer="ui_reducer"
                            value={progress + 1}
                        />
        </Wrapper>
    )
}

const mapStateToProps = (state) => ({
    progress: state.ui_reducer.progress,
})

export default connect(mapStateToProps)(Onboard)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
        height: 20rem;
        width: 40rem; 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 10rem;
`