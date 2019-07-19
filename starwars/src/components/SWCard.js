import React from 'react';

const SWCard = (props) => {
    console.log (props);
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <ul>
                <li>Height: {props.height}cm</li>
                <li>Mass: {props.mass}kg</li>
                <li>Hair Color: {props.hair_color}</li>
                <li>Skin Color: {props.skin_color}</li>
            </ul>
        </div>
    )
}

export default SWCard;