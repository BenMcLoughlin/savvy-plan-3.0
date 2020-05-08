import React from 'react'
import styled from "styled-components"
import {connect} from "react-redux"
import _ from "lodash"
import {setKeyValue_action} from "redux/actions"
import TextInput from "components/TextInput"
import Slider from "components/Slider"
import AddButton from "components/AddButton"


function Form ({title, array, label, name, reducer, state, setKeyValue_action})  {

    return (
        <Wrapper>
            <Header>{title}</Header>
            <Row>
                <Column>
                     <TextInput  name={"banana"} reducer={"ui_reducer"}></TextInput>
                     <Select>
                        <Label>{_.startCase(label)}</Label>
                        {
                            array.map((d, i, a) => <Square 
                                            first={i === 0}
                                            // selected={d === value}
                                            onClick={() => setKeyValue_action(name, reducer, d)}
                            >{_.startCase(d)}</Square>)
                        }
                        <Square last>
                            <Input
                                    onChange={(e) => setKeyValue_action("other", reducer, e.target.value)}
                                    //value={user_reducer.other}
                            ></Input>
                        </Square>
                    </Select>
                </Column>
                <Column>
                     <Row>
                         < Slider label={"I started in"}/>
                        < Slider label={"I started in"}/>
                     </Row>
                    <Row>
                        <AddButton />
                        < Slider label={"And finished in the year"}/>
                     </Row> 
                </Column>
            </Row>
        </Wrapper>
    )
}
const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps, {setKeyValue_action})(Form)

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 70rem;
    height: 50rem;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: -30rem;
`
const Header = styled.label`
    font-size: 1.6rem;
    width: 100%;
    font-weight: normal;
    pointer-events: none;
    color: ${props => props.theme.color.darkGrey};
    font-weight: 800;
    border-bottom: 1px solid grey;
    padding: 1rem;

`
const Label = styled.label`
    font-size: 1.6rem;
    font-weight: normal;
    pointer-events: none;
    color: ${props => props.theme.color.darkGrey};
    font-weight: 800;

`
const Select= styled.div`
    width: 30rem;
    min-height: 30rem;
    position: relative;
    display: flex;
    flex-direction: column;
`

const Square = styled.div`
    width: 100%;
    padding: 1rem;
    min-height: 5rem;
    position: relative;
    display: flex;
    border-radius: ${props => props.first ? "10px" : 0} 
                   ${props => props.first ? "10px" : 0} 
                   ${props => props.last ? "10px" : 0} 
                   ${props => props.last ? "10px" : 0};
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 800;
    background: ${props => props.selected ? "#5E9090" : "white"};
    border: 0.5px solid #E0DEDD;
    cursor: pointer;
    color: ${props => props.selected ?  "white" : "${props => props.theme.color.mediumGrey}"};
`
// const LargeSquare = styled(Sqaure)`

//     height: 5rem;
// `
const Input = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 1.6rem;
    font-weight: 800;
    padding: 1.2rem;
    display: block;
    width: 27rem;
    height: 5rem;
    border: none;
    border-radius: 3px;
    color: ${props => props.theme.color.darkGrey};

    &:focus{
        outline: none;
    }

`
const Column = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        padding: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
 `

 const Row = styled.div`
        display: flex;
        width: 100%;
     `
