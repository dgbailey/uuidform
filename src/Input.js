import React, {useState} from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid4';
import { tsPropertySignature } from '@babel/types';




export const Input = (props) => {





    //completed state
    //text state
    //dispatch completed state
    //handle change

    const[completeState,setCompleteState] = useState(false);
    const[inputText,setInputText] = useState(null);
    const {key,idKey,dispatch} = props;

    const handleChange = e => {
        e.preventDefault();
        let name = e.target.name;
        let val = e.target.value;
        let updateObject = {name:val}
        setInputText(updateObject)

        evalCompleteState(updateObject);
    }

    function evalCompleteState(object){
        if(object.name.length === 0){
            setCompleteState(false)
            let inputKey = idKey;
            let myObj = {}
            myObj[inputKey] = false
            dispatch(myObj);
        }
        else{
            setCompleteState(true);
            let inputKey = idKey;
            let myObj = {}
            myObj[inputKey] = true
            dispatch(myObj);
        }

    }


    return (

        <StyledInput name={props.name}  onChange={handleChange}>

        </StyledInput>
    )




}

const StyledInput = styled.input `

    border:1px solid black;
    margin:20px;
    display:inline-block;
    height:80px;



`