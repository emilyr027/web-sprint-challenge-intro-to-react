// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledStarWars = styled.div`
    background-color: ${props => props.theme.fontFamily};
    font-family: ${props => props.theme.fontFamily};
    width: ${props => props.theme.width};
    margin: 3rem;
    margin-left:4rem;
    font-size: 1em;
    text-align: left;

    &:hover {
        background-color:white;
    }
`

const Name = styled.h2`
    font-style: italic;
    font-size: 2.3em;
    text-align: center;
`

const Character = (props) => {
    console.log(props);


    return(
        <StyledStarWars>
            <Name>{props.name}</Name>
            <h3> Height: {props.height} </h3>
            <h3> Hair Color: {props.hair_color} </h3>
            <h3> Eye Color: {props.eye_color} </h3>
            <h3> Birth Year: {props.birth_year} </h3>
        </StyledStarWars>
    )
}

export default Character