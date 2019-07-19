import React from 'react';
import styled from 'styled-components';

const SWCard =  (props) => {
    const Char = styled.div`color: blue;`
    console.log (props);
    return(
        <Char>
            <h2>Name: {props.name}</h2>
            <ul>
                <li>Height: {props.height}cm</li>
                <li>Mass: {props.mass}kg</li>
                <li>Hair Color: {props.hair_color}</li>
                <li>Skin Color: {props.skin_color}</li>
            </ul>
        </Char>
    )
}

export default SWCard;