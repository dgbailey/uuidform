import React, {useState} from 'react';
import styled from 'styled-components';
import uuid4 from 'uuid4';
import {Input} from './Input';



export const Form = () => {


    //we know questions ahead of time
    const [numQuestions, setNumQuestions] = useState(3);
    const [progressNumerator,setNumerator] = useState({});
    const [inputs,setInputs] = useState(Array.from(Array(numQuestions)).map(i => uuid4()));
    //did not originally preserve inputs across re renders did not have them set as state;
  

    const dispatchInputState = updatedInput => {
        setNumerator(Object.assign({},progressNumerator,updatedInput));
    }

    return (


        <StyledForm>
            {inputs.map(i => <Input dispatch={dispatchInputState} key={i} idKey={i} num={progressNumerator} denom={numQuestions}></Input>)}
        </StyledForm>
    )





}



const StyledForm = styled.div `
    margin:100px auto;
    height:600px;
    width:400px;
    border:1px solid black;
    display:flex;
    justify-content:center;

    flex-direction:column;



`