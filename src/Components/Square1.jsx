import React from 'react';
import "./Square.css"

export default function Square1(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}