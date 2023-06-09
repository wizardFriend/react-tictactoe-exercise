import React from 'react';
import Square1 from './Square1';
import "./Board.css"

export default function Board1({squares, onClick}) {
    const renderSquare = (i) => {
        return (
            <Square1 value={squares[i]} onClick={() => onClick(i)} />
        )
    }
    return (
        <div className='board-wrapper'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}
