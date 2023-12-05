import React, { useState, useEffect } from 'react';

function Score_Info(){
    return(
        <div>
        <h2>Scoring</h2>
        <p>Here's how scoring works. Guess letter on your own=1 attempt. </p>
        <ul>
            <li>Guess letter on your own=1 attempt</li>
            <li>Request one of the definitions be taken away=2 attempts</li>
            <li>Request a letter=2 attempts</li>
        </ul>
        <p>The final score is tallied using number of letters/number of attempts</p>
    </div>
    );
};

export default Score_Info