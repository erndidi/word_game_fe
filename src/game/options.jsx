import React, { useState, useEffect } from 'react';

export function Options(props){

    const handleNewGame=()=>{
        props.handleNewGame();
    }

    const handleRemoveHint =()=>{
        props.handleRemoveHint();
    }

    const handleRevealLetter=()=>{
        props.handleRevealLetter();
    }


    return (
        <div className='gameButtonBox'>
        <button onClick={handleNewGame} >New Game</button>
        <button onClick={handleRemoveHint} >Need hint</button>
        <button onClick={handleRevealLetter} >Give me a letter</button>
    </div>
    );
};
export default Options